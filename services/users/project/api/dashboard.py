# #services/users/project/api/dashboard.py

# from flask import Blueprint, jsonify, request, render_template
# from project.api.models import User, History
# from project import db
# from project.api.utils import authenticate, is_admin

# users_blueprint = Blueprint('users', __name__, template_folder='./templates')

# @users_blueprint.route('/dashboard/log', methods=['GET'])
# def mvp():
#     """Get mvp scores. """
#     response_object = {
#         'status': 'success',
#         'data': {
#             'users': [user.to_json() for user in User.query.all()]
#         }
#     }
#     return jsonify(response_object), 200
