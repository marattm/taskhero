#!/bin/bash

# install and running command for virtual env
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver



