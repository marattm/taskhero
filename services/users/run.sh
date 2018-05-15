#!/bin/bash

# run server
export FLASK_APP='project/__init__.py'
export FLASK_DEBUG=1
python3.6 manage.py run
