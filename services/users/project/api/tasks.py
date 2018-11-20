# services/users/project/api/tasks.py


from flask import Blueprint, jsonify, request, render_template, send_from_directory
from sqlalchemy import exc
import datetime
import sys



from project.api.models import User, History
from project import db
from project.api.utils import authenticate, is_admin, task_list

tasks_blueprint = Blueprint('tasks', __name__, template_folder='./templates')


@tasks_blueprint.route('/tasks/health', methods=['GET'])
def service_health():
    return jsonify({
        'status': 'success',
        'message': 'Tasks service healthy!'
    })

@tasks_blueprint.route('/tasks', methods=['GET'])
def get_all_tasks():
    """Get all tasks."""
    response_object = {
        'status': 'success',
        'data': {
            'tasks': [task.to_json() for task in History.query.all()]
        }
    }
    return jsonify(response_object), 200

@tasks_blueprint.route('/tasks', methods=['POST'])
def task_log():
    post_data = request.get_json()
    response_object = {
        'status': 'fail',
        'message': 'Invalid payload.'
    }
    if not post_data:
        return jsonify(response_object), 400
    task = post_data.get('task')
    email = post_data.get('email')
    user = User.query.filter_by(email=email).first()
    if not user:
        response_object['status'] = 'fail'
        response_object['message'] = 'User not found!'
        return jsonify(response_object), 201
    try:
        user.task_counter += 1
        user.last_task = task
        user.last_task_date = datetime.datetime.utcnow()

        if task == "empty_dishwasher":
            user.empty_dishwasher += 1
        elif task == "fill_dishwasher":
            user.fill_dishwasher += 1
        elif task == "take_garbage":
            user.take_garbage += 1
        elif task == "clean_tables":
            user.clean_tables += 1
        elif task == "clean_stove_top":
            user.clean_stove_top += 1
        elif task == "clean_floor":
            user.clean_floor += 1
        elif task == "clean_bathroom":
            user.clean_bathroom += 1
        elif task == "paper_towel":
            user.paper_towel += 1
        elif task == "toilet_paper":
            user.toilet_paper += 1
        elif task == "kitchen_soap":
            user.kitchen_soap += 1
        elif task == "bleacher":
            user.bleacher += 1
        elif task == "dishwasher_pods":
            user.dishwasher_pods += 1

        if not user.tasks_counter_list:
            user.tasks_counter_list = task_list()

        db.session.add(History(
            user_id=user.id,
            username=user.username,
            user_email=user.email,
            task=task,
            date=datetime.datetime.utcnow() - datetime.timedelta(hours=5)))
        db.session.commit()
        task_history = History.query.filter_by(user_id=user.id).first()
        response_object['status'] = 'success'
        response_object['message'] = f'{task_history.id} was added!'
        return jsonify(response_object), 200
    except exc.IntegrityError as e:
        db.session.rollback()
        response_object['status'] = 'fail'
        response_object['message'] = 'Database error.'
        return jsonify(response_object), 400

@tasks_blueprint.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    """Delete task."""
    post_data = request.get_json()
    response_object = {
        'status': 'fail',
        'message': 'Invalid payload.'
    }
    task_id = id
    if not task_id:
        response_object['status'] = 'fail'
        response_object['message'] = 'Task id not found.'
        return jsonify(response_object), 403
    try:
        history = History.query.filter_by(id=task_id).first()
        if not history:
            response_object['status'] = 'fail'
            response_object['message'] = 'Wrong id value.'
            return jsonify(response_object), 402
        task = history.task
        db.session.delete(history)
        user = User.query.filter_by(id=history.user_id).first()
        user.task_counter -= 1

        if task == "empty_dishwasher":
            user.empty_dishwasher -= 1
        elif task == "fill_dishwasher":
            user.fill_dishwasher -= 1
        elif task == "take_garbage":
            user.take_garbage -= 1
        elif task == "clean_tables":
            user.clean_tables -= 1
        elif task == "clean_stove_top":
            user.clean_stove_top -= 1
        elif task == "clean_floor":
            user.clean_floor -= 1
        elif task == "clean_bathroom":
            user.clean_bathroom -= 1
        elif task == "paper_towel":
            user.paper_towel -= 1
        elif task == "toilet_paper":
            user.toilet_paper -= 1
        elif task == "kitchen_soap":
            user.kitchen_soap -= 1
        elif task == "bleacher":
            user.bleacher -= 1
        elif task == "dishwasher_pods":
            user.dishwasher_pods -= 1

        db.session.commit()
        response_object['status'] = 'success'
        response_object['message'] = 'Task was deleted!'
        return jsonify(response_object), 200
    except exc.IntegrityError as e:
        db.session.rollback()
        response_object['status'] = 'fail'
        response_object['message'] = 'Database error.'
        return jsonify(response_object), 400
