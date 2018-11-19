# services/users/project/api/users.py


from flask import Blueprint, jsonify, request, render_template, send_from_directory
from sqlalchemy import exc
import datetime
import sys



from project.api.models import User, History
from project import db
from project.api.utils import authenticate, is_admin, task_list

users_blueprint = Blueprint('users', __name__, template_folder='./templates')


@users_blueprint.route('/users/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })


@users_blueprint.route('/', defaults={'path': ''})
@users_blueprint.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists("build/" + path):
        return send_from_directory('build/', path)
    else:
        return send_from_directory('build', 'index.html')


# @users_blueprint.route('/', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#         username = request.form['username']
#         email = request.form['email']
#         password = request.form['password']
#         db.session.add(User(username=username,
#                             email=email,
#                             password=password))
#         db.session.commit()
#     users = User.query.all()
#     return render_template('index.html', users=users)


@users_blueprint.route('/user', methods=['POST'])
# @authenticate
def send_user_info():
    post_data = request.get_json()
    response_object = {
        'status': 'Fail',
        'message': 'Invalid payload.',
        'data': {
            'id': '',
            'username': '',
            'email': ''
        }
    }
    # if not is_admin(resp):
    #     response_object['message'] = 'You do not have permission to do that.'
    #     return jsonify(response_object), 401
    if not post_data:
        return jsonify(response_object), 400
    auth_token = post_data.get('auth_token')
    # print(auth_token, file=sys.stderr)
    try:
        payload_data = User.decode_auth_token(auth_token)
        if not payload_data:
            response_object['message'] = 'Sorry. Wrong token.'
            return jsonify(response_object), 400
        else:
            try:
                response_object['data']['id'] = payload_data['id']
                response_object['data']['username'] = payload_data['username']
                response_object['data']['email'] = payload_data['email'] 
                response_object['status'] = 'success'
                response_object['message'] = 'Token decoded.'
                return jsonify(response_object), 201
            except:
                response_object['message'] = payload_data
            return jsonify(response_object), 400
    except exc.IntegrityError as e:
        return jsonify(response_object), 400



@users_blueprint.route('/users', methods=['POST'])
@authenticate
def add_user(resp):
    post_data = request.get_json()
    response_object = {
        'status': 'fail',
        'message': 'Invalid payload.'
    }
    if not is_admin(resp):
        response_object['message'] = 'You do not have permission to do that.'
        return jsonify(response_object), 401
    if not post_data:
        return jsonify(response_object), 400
    username = post_data.get('username')
    email = post_data.get('email')
    password = post_data.get('password')
    try:
        user = User.query.filter_by(email=email).first()
        if not user:
            db.session.add(
                User(username=username, email=email, password=password))
            db.session.commit()
            response_object['status'] = 'success'
            response_object['message'] = f'{email} was added!'
            return jsonify(response_object), 201
        else:
            response_object['message'] = 'Sorry. That email already exists.'
            return jsonify(response_object), 400
    except exc.IntegrityError as e:
        db.session.rollback()
        return jsonify(response_object), 400

@users_blueprint.route('/users', methods=['GET'])
def get_all_users():
    """Get all users"""
    response_object = {
        'status': 'success',
        'data': {
            'users': [user.to_json() for user in User.query.all()]
        }
    }
    return jsonify(response_object), 200


@users_blueprint.route('/users/<user_id>', methods=['GET'])
def get_single_user(user_id):
    """Get single user details"""
    response_object = {
        'status': 'fail',
        'message': 'User does not exist'
    }
    try:
        user = User.query.filter_by(id=int(user_id)).first()
        if not user:
            return jsonify(response_object), 404
        else:
            response_object = {
                'status': 'success',
                'data': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    'active': user.active
                }
            }
            return jsonify(response_object), 200
    except ValueError:
        return jsonify(response_object), 404


@users_blueprint.route('/tasks/task_log', methods=['POST'])
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


@users_blueprint.route('/tasks', methods=['GET'])
def get_all_tasks():
    """Get all tasks."""
    response_object = {
        'status': 'success',
        'data': {
            'tasks': [task.to_json() for task in History.query.all()]
        }
    }
    return jsonify(response_object), 200


@users_blueprint.route('/tasks/del', methods=['POST'])
def delete_task():
    """Delete task."""
    post_data = request.get_json()
    response_object = {
        'status': 'fail',
        'message': 'Invalid payload.'
    }
    if not post_data:
        return jsonify(response_object), 401
    task_id = post_data.get('id')
    task = post_data.get('task')
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
