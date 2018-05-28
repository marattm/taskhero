# services/users/project/tests/utils.py


from project import db
from project.api.models import User


def add_user(username, email, password):
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    return user


def user_json():
        return {
            'id': '',
            'first_name': 'Marat',
            'last_name': 'Monnie',
            'username': 'maratule',
            'email': 'marat@monnie.com',
            'password': 'test123',
            'confirm': 'test123'
        }


def user_json_incomplete():
    return {
        'first_name': 'Marat',
        'last_name': 'Monnie',
        'email': 'marat@monnie.com',
        'password': 'test123',
        'confirm': 'test123'
    }


def user2_json():
    return {
        'id': '',
        'first_name': 'John',
        'last_name': 'Doe',
        'username': 'john',
        'email': 'john@doe.com',
        'password': 'john123',
        'confirm': 'john123'
    }
