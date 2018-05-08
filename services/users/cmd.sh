#!/bin/bash

# install and running command for virtual env
virtualenv -p python3.6 venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver


# docker
sudo docker-compose -f docker-compose-dev.yml build
sudo docker-compose -f docker-compose-dev.yml up -d
docker-compose -f docker-compose-dev.yml up -d --build # sanity check
docker-compose -f docker-compose-dev.yml \
  run users python manage.py recreate_db

    # postgre
    docker exec -ti $(docker ps -aqf "name=users-db") psql -U postgres
    \c users_dev
    \dt
    \q
