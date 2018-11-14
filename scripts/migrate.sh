#!/bin/bash

docker-compose -f Docker-compose-dev.yml run users python manage.py db init
docker-compose -f Docker-compose-dev.yml run users python manage.py db migrate
docker-compose -f Docker-compose-dev.yml run users python manage.py db upgrade
