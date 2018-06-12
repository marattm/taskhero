# services/users/project/tests/test_users.py


import json
import unittest


from project import db
from project.api.models import User
from project.tests.base import BaseTestCase
from project.tests.utils import add_user, user2_json, user_json, \
    user_test, user_login


class TestUserService(BaseTestCase):
    """Tests for the Users Service."""

    def test_users(self):
        """Ensure the /ping route behaves correctly."""
        rv = self.client.get('/users/ping')
        data = json.loads(rv.data.decode())
        self.assertEqual(rv.status_code, 200)
        self.assertIn('pong!', data['message'])
        self.assertIn('success', data['status'])

    def test_add_user(self):
        """Ensure a new user can be added to the database."""
        add_user(
            user_test()['username'],
            user_test()['email'],
            user_test()['password']
        )
        with self.client:
            resp_login = self.client.post(
                '/auth/login',
                data=json.dumps(user_test()),
                content_type='application/json'
            )
            token = json.loads(resp_login.data.decode())['auth_token']
            rv = self.client.post(
                '/users',
                data=json.dumps(user_json()),
                content_type='application/json',
                headers={'Authorization': f'Bearer {token}'}
            )
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 201)
            self.assertIn('marat@monnie.com was added!', data['message'])
            self.assertIn('success', data['status'])

    def test_add_user_invalid_json(self):
        """Ensure error is thrown if the JSON object is empty."""
        add_user(
            user_test()['username'],
            user_test()['email'],
            user_test()['password']
        )
        with self.client:
            resp_login = self.client.post(
                '/auth/login',
                data=json.dumps(user_test()),
                content_type='application/json'
            )
            token = json.loads(resp_login.data.decode())['auth_token']
            rv = self.client.post(
                '/users',
                data=json.dumps({}),
                content_type='application/json',
                headers={'Authorization': f'Bearer {token}'}
            )
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 400)
            self.assertIn('Invalid payload.', data['message'])
            self.assertIn('fail', data['status'])

    def test_add_user_invalid_json_keys(self):
        """
        Ensure error is thrown if the JSON object does not have a username key.
        """
        add_user(
            user_test()['username'],
            user_test()['email'],
            user_test()['password']
        )
        with self.client:
            resp_login = self.client.post(
                '/auth/login',
                data=json.dumps(user_test()),
                content_type='application/json'
            )
            token = json.loads(resp_login.data.decode())['auth_token']
            rv = self.client.post(
                '/users',
                data=json.dumps(user_login()),
                content_type='application/json',
                headers={'Authorization': f'Bearer {token}'}
            )
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 400)
            self.assertIn('Invalid payload.', data['message'])
            self.assertIn('fail', data['status'])

    def test_add_user_duplicate_email(self):
        """Ensure error is thrown if the email already exists."""
        add_user(
            user_test()['username'],
            user_test()['email'],
            user_test()['password']
        )
        with self.client:
            resp_login = self.client.post(
                '/auth/login',
                data=json.dumps(user_test()),
                content_type='application/json'
            )
            token = json.loads(resp_login.data.decode())['auth_token']
            self.client.post(
                '/users',
                data=json.dumps(user_json()),
                content_type='application/json',
                headers={'Authorization': f'Bearer {token}'}
            )
            rv = self.client.post(
                '/users',
                data=json.dumps(user_json()),
                content_type='application/json',
                headers={'Authorization': f'Bearer {token}'}
            )
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 400)
            self.assertIn(
                'Sorry. That email already exists.', data['message'])
            self.assertIn('fail', data['status'])

    def test_single_user(self):
        """Ensure get single user behaves correctly."""
        user = add_user(
            user_json()['username'],
            user_json()['email'],
            user_json()['password'])
        with self.client:
            rv = self.client.get(f'/users/{user.id}')
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 200)
            self.assertIn(user_json()[
                          'username'], data['data']['username'])
            self.assertIn(user_json()['email'], data['data']['email'])
            self.assertIn('success', data['status'])

    def test_single_user_no_id(self):
        """Ensure error is thrown if an id is not provided."""
        with self.client:
            rv = self.client.get('/users/example')
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 404)
            self.assertIn('User does not exist', data['message'])
            self.assertIn('fail', data['status'])

    def test_single_user_incorrect_id(self):
        """Ensure error is thrown if the id does not exist."""
        with self.client:
            rv = self.client.get('/users/exmple2')
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 404)
            self.assertIn('User does not exist', data['message'])
            self.assertIn('fail', data['status'])

    def test_all_users(self):
        """Ensure get all users behaves correctly."""
        add_user(user_json()['username'], user_json()[
            'email'], user_json()['password'])
        add_user(user2_json()['username'],
                 user2_json()['email'],
                 user2_json()['password'])
        with self.client:
            rv = self.client.get('/users')
            data = json.loads(rv.data.decode())
            self.assertEqual(rv.status_code, 200)
            self.assertEqual(len(data['data']['users']), 2)
            self.assertIn(user_json()[
                          'username'], data['data']['users'][0]['username'])
            self.assertIn(
                user_json()['email'], data['data']['users'][0]['email'])
            self.assertIn(user2_json()[
                          'username'], data['data']['users'][1]['username'])
            self.assertIn(
                user2_json()['email'], data['data']['users'][1]['email'])
            self.assertIn('success', data['status'])

    def test_main_with_users(self):
        """Ensure the main route behaves correctly when users have been
        added to the database."""
        add_user(user_json()['username'],
                 user_json()['email'], user_json()['password'])
        add_user(user2_json()['username'],
                 user2_json()['email'], user2_json()['password'])
        with self.client:
            rv = self.client.get('/')
            self.assertEqual(rv.status_code, 200)
            self.assertIn(b'<h1>All Users</h1>', rv.data)
            self.assertNotIn(b'<p>No users!</p>', rv.data)
            self.assertIn(b'marat', rv.data)
            self.assertIn(b'john', rv.data)

    def test_main_no_users(self):
        """Ensure the main route behaves correctly when no users have been
        added to the database."""
        rv = self.client.get('/')
        self.assertEqual(rv.status_code, 200)
        self.assertIn(b'<h1>All Users</h1>', rv.data)
        self.assertIn(b'<p>No users!</p>', rv.data)

    def test_add_user_inactive(self):
        add_user(
            user_test()['username'],
            user_test()['email'],
            user_test()['password']
        )
        # update user
        user = User.query.filter_by(email=user_test()['email']).first()
        user.active = False
        db.session.commit()
        with self.client:
            resp_login = self.client.post(
                '/auth/login',
                data=json.dumps(user_test()),
                content_type='application/json'
            )
            token = json.loads(resp_login.data.decode())['auth_token']
            rv = self.client.post(
                '/users',
                data=json.dumps(user_json()),
                content_type='application/json',
                headers={'Authorization': f'Bearer {token}'}
            )
            data = json.loads(rv.data.decode())
            self.assertTrue(data['status'] == 'fail')
            self.assertTrue(data['message'] == 'Provide a valid auth token.')
            self.assertEqual(rv.status_code, 401)


if __name__ == '__main__':
    unittest.main()
