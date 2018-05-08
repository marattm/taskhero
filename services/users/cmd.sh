#!/bin/bash

# install and running command for virtual env
virtualenv -p python3.6 venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver


# docker
sudo docker-compose -f docker-compose-dev.yml build
sudo docker-compose -f docker-compose-dev.yml up -d