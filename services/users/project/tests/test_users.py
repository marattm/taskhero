# services/users/project/tests/test_users.py


import json
import unittest

from project.tests.base import BaseTestCase
from project import db
from project.api.models import User


class TestUserService(BaseTestCase):
    """Tests for the Users Service."""

    def user_json(self):
        return {
            'id': '',
            'first_name': 'Marat',
            'last_name': 'Monnie',
            'username': 'maratule',
            'email': 'marat@monnie.com',
            'password': 'test123',
            'confirm': 'test123'
        }

    def user_json_incomplete(self):
        return {
            'first_name': 'Marat',
            'last_name': 'Monnie',
            'email': 'marat@monnie.com',
            'password': 'test123',
            'confirm': 'test123'
        }

    def test_users(self):
        """Ensure the /ping route behaves correctly."""
        rv = self.client.get('/users/ping')
        data = json.loads(rv.data.decode())
        self.assertEqual(rv.status_code, 200)
        self.assertIn('pong!', data['message'])
        self.assertIn('success', data['status'])

    def test_add_user(self):
        """Ensure a new user can be added to the database."""
        with self.client:
            rv = self.client.post(
                '/users',
                data=json.dumps(self.user_json()),
                content_type='application/json',
            )
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 201)
            self.assertIn('{} was added!'.format(self.user_json()['email']),
                                                data['message'])
            self.assertIn('success', data['status'])

    def test_add_user_invalid_json(self):
        """Ensure error is thrown if the JSON object is empty."""
        with self.client:
            rv = self.client.post(
                '/users',
                data=json.dumps({}),
                content_type='application/json',
            )
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 400)
            self.assertIn('Invalid payload.', data['message'])
            self.assertIn('fail', data['status'])

    def test_add_user_invalid_json_keys(self):
        """
        Ensure error is thrown if the JSON object does not have a username key.
        """
        with self.client:
            rv = self.client.post(
                '/users',
                data=json.dumps(self.user_json_incomplete()),
                content_type='application/json',
            )
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 400)
            self.assertIn('Invalid payload.', data['message'])
            self.assertIn('fail', data['status'])

    def test_add_user_duplicate_email(self):
        """Ensure error is thrown if the email already exists."""
        with self.client:
            self.client.post(
                '/users',
                data=json.dumps(self.user_json()),
                content_type='application/json',
            )
            rv = self.client.post(
                '/users',
                data=json.dumps(self.user_json()),
                content_type='application/json',
            )
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 400)
            self.assertIn(
                'Sorry. That email already exists.', data['message'])
            self.assertIn('fail', data['status'])

    def test_single_user(self):
        """Ensure get single user behaves correctly."""
        user = User(
                    username='{}'.format(self.user_json()['username']),
                    email='{}'.format(self.user_json()['email'])
                    )
        db.session.add(user)
        db.session.commit()
        with self.client:
            rv = self.client.get(f'/users/{user.id}')
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 200)
            self.assertIn('{}'.format(self.user_json()['username']),
                         data['data']['username'])
            self.assertIn('{}'.format(self.user_json()['email']),
                         data['data']['email'])
            self.assertIn('success', data['status'])

    def test_single_user_no_id(self):
        """Ensure error is thrown if an id is not provided."""
        with self.client:
            response = self.client.get('/users/example')
            data = json.loads(response.data.decode())
            self.assertEqual(response.status_code, 404)
            self.assertIn('User does not exist', data['message'])
            self.assertIn('fail', data['status'])

    def test_single_user_incorrect_id(self):
        """Ensure error is thrown if the id does not exist."""
        with self.client:
            response = self.client.get('/users/exmple2')
            data = json.loads(response.data.decode())
            self.assertEqual(response.status_code, 404)
            self.assertIn('User does not exist', data['message'])
            self.assertIn('fail', data['status'])

    def test_main_no_users(self):
        """Ensure the main route behaves correctly when no users have been
        added to the database."""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1>All Users</h1>', response.data)
        self.assertIn(b'<p>No users!</p>', response.data)


if __name__ == '__main__':
    unittest.main()
