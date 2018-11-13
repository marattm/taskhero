# services/users/project/api/models.py
from flask import current_app
import datetime
import jwt

from project import db, bcrypt
# from project.api.utils import task_list


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(128), unique=True, nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    active = db.Column(db.Boolean, default=True, nullable=False)
    admin = db.Column(db.Boolean, default=False, nullable=True)
    task_counter = db.Column(db.Integer, default=0, nullable=True)
    last_task = db.Column(db.String(128), default=None, nullable=True)
    last_task_date = db.Column(
        db.DateTime(), nullable=True)
    history_id = db.Column(
        db.Integer, db.ForeignKey('history.id'), nullable=True)
    tasks_counter_list = db.Column(db.JSON, default=None, nullable=True)
    # history_id = db.Column(JSON, db.ForeignKey('history.id'), nullable=True)
    empty_dishwasher = db.Column(db.Integer, default=0, nullable=True)
    fill_dishwasher = db.Column(db.Integer, default=0, nullable=True)
    take_garbage = db.Column(db.Integer, default=0, nullable=True)
    clean_tables = db.Column(db.Integer, default=0, nullable=True)
    clean_stove_top = db.Column(db.Integer, default=0, nullable=True)
    clean_floor = db.Column(db.Integer, default=0, nullable=True)
    clean_bathroom = db.Column(db.Integer, default=0, nullable=True)
    paper_towel = db.Column(db.Integer, default=0, nullable=True)
    toilet_paper = db.Column(db.Integer, default=0, nullable=True)
    kitchen_soap = db.Column(db.Integer, default=0, nullable=True)
    bleacher = db.Column(db.Integer, default=0, nullable=True)
    dishwasher_pods = db.Column(db.Integer, default=0, nullable=True)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = bcrypt.generate_password_hash(
            password, current_app.config.get('BCRYPT_LOG_ROUNDS')).decode()

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'active': self.active,
            'admin': self.admin,
            'task_counter': self.task_counter,
            'last_task': self.last_task,
            'last_task_date': self.last_task_date,
            # 'tasks_counter_list': self.tasks_counter_list,
            'tasks_counter_list': [
                {
                    'task_name': 'Empty Dishwasher',
                    'empty_dishwasher': self.empty_dishwasher,
                    'counter': self.empty_dishwasher
                },
                {
                    'task_name': 'Fill Dishwasher',
                    'fill_dishwasher': self.fill_dishwasher,
                    'counter': self.fill_dishwasher
                },
                {
                    'task_name': 'Take Garbage',
                    'take_garbage': self.take_garbage,
                    'counter': self.take_garbage
                },
                {
                    'task_name': 'Clean Tables',
                    'clean_tables': self.clean_tables,
                    'counter': self.clean_tables
                },
                {
                    'task_name': 'Clean Stove_top',
                    'clean_stove_top': self.clean_stove_top,
                    'counter': self.clean_stove_top
                },
                {
                    'task_name': 'Clean Floor',
                    'clean_floor': self.clean_floor,
                    'counter': self.clean_floor
                },
                {
                    'task_name': 'Clean Bathroom',
                    'clean_bathroom': self.clean_bathroom,
                    'counter': self.clean_bathroom
                },
                {
                    'task_name': 'Paper Towel',
                    'paper_towel': self.paper_towel,
                    'counter': self.paper_towel
                },
                {
                    'task_name': 'Toilet Paper',
                    'toilet_paper': self.toilet_paper,
                    'counter': self.toilet_paper
                },
                {
                    'task_name': 'Kitchen Soap',
                    'kitchen_soap': self.kitchen_soap,
                    'counter': self.kitchen_soap
                },
                {
                    'task_name': 'Bleacher',
                    'bleacher': self.bleacher,
                    'counter': self.bleacher
                },
                {
                    'task_name': 'Dishwasher Pods',
                    'dishwasher_pods': self.dishwasher_pods,
                    'counter': self.dishwasher_pods
                }
            ]
        }

    def encode_auth_token(self, user_id):
        """Generates the auth token"""
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(
                    days=current_app.config.get('TOKEN_EXPIRATION_DAYS'),
                    seconds=current_app.config.get('TOKEN_EXPIRATION_SECONDS')
                ),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                current_app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
        except Exception as e:
            return e

    @staticmethod
    def decode_auth_token(auth_token):
        """
        Decodes the auth token - :param auth_token: - :return: integer|string
        """
        try:
            payload = jwt.decode(
                auth_token, current_app.config.get('SECRET_KEY'))
            return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'


class History(db.Model):
    __tablename__ = "history"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    username = db.Column(db.String(128), nullable=True)
    user_email = db.Column(db.String(128), nullable=True)
    date = db.Column(
        db.DateTime(), default=datetime.datetime.utcnow(), nullable=True)
    task = db.Column(db.String(128), nullable=True)

    def __init__(self, user_id, username, user_email, date, task):
        self.user_id = user_id
        self.username = username
        self.user_email = user_email
        self.date = date
        self.task = task

    def to_json(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'username': self.username,
            'user_email': self.user_email,
            'date': self.date,
            'task': self.task
        }
