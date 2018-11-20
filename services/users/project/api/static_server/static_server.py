# services/users/project/api/static_server.py


from flask import Blueprint, send_from_directory
import sys, os

static_server_blueprint = Blueprint('static_server', __name__)

@static_server_blueprint.route('/', defaults={'path': ''})
@static_server_blueprint.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists("build/" + path):
        return send_from_directory('build/', path)
    else:
        return send_from_directory('build', 'index.html')
