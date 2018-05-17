# services/users/project/api/users.py


from flask import Blueprint, jsonify, request, render_template
from sqlalchemy import exc
from project.api.models import User
from project import db


users_blueprint = Blueprint('users', __name__, template_folder='./templates')


@users_blueprint.route('/users/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })


@users_blueprint.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        db.session.add(User(username=username, email=email,
                            first_name=first_name, last_name=last_name))
        db.session.commit()
    users = User.query.all()
    return render_template('index.html', users=users)


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


@users_blueprint.route('/users', methods=['POST'])
def add_user():
    post_data = request.get_json()
    response_object = {
        'status': 'fail',
        'message': 'Invalid payload.'
    }
    if not post_data:
        return jsonify(response_object), 400
    username = post_data.get('username')
    email = post_data.get('email')
    first_name = post_data.get('first_name')
    last_name = post_data.get('last_name')
    bio = post_data.get('bio')
    gender = post_data.get('gender')
    try:
        user = User.query.filter_by(email=email).first()
        if not user:
            db.session.add(User(username=username, email=email,
                                first_name=first_name, last_name=last_name, bio=bio, gender=gender))    
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


# @users_blueprint.route('/users/<user_id>', methods=['GET'])
# def get_single_user(user_id):
#     """Get single user details"""
#     response_object = {
#         'status': 'fail',
#         'message': 'User does not exist'
#     }
#     try:
#         user = User.query.filter_by(id=int(user_id)).first()
#         if not user:
#             return jsonify(response_object), 404
#         else:
#             response_object = {
#                 'status': 'success',
#                 'data': {
#                     'id': user.id,
#                     'username': user.username,
#                     'email': user.email,
#                     'active': user.active
#                 }
#             }
#             return jsonify(response_object), 200
#     except ValueError:
#         return jsonify(response_object), 404


@users_blueprint.route('/register', methods=('GET', 'POST'))
def register():
    form = RegisterForm()
    if form.validate_on_submit():

        # encrypt the password
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(
            form.password.data.encode('utf-8'), salt)
        code = str(uuid.uuid4())

        # write all the fields into the trainer model
        user = User(
            username=form.username.data.lower(),
            password=hashed_password,
            email=form.email.data,
            first_name=form.first_name.data,
            last_name=form.last_name.data,
            change_configuration={
                "new_email": form.email.data.lower(),
                "confirmation_code": code
            }
        )

        # save all the modification into the database
        user.save()

        message = "Sucessful"
        return render_template('user/login.html', form=form, message=message)
        # return render_template('user/user_registered.html', message=message)
    return render_template('user/register.html', form=form)

