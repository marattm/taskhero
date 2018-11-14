#!/bin/bash

python services/users/manage.py db init
python services/users/manage.py db migrate
python services/users/manage.py db upgrade
