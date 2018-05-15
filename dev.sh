#!/bin/bash

# there is a problem with the dev env, there is some cross-origiin problem

# the issue is detailed in the issues.md

# Docker-Machine Developement Deploy

# docker-machine create -d virtualbox trainme-dev
# docker-machine env trainme-dev
# eval $(docker-machine env trainme-dev)
# URL0='http://'
# export REACT_APP_USERS_SERVICE_URL=$URL0$(docker-machine ip trainme-dev)
# # export REACT_APP_USERS_SERVICE_URL=http://121.0.0.1
# docker-compose -f docker-compose-dev.yml up -d --build
# docker-compose -f docker-compose-dev.yml \
#   run users python manage.py recreate_db


# Local Developement Deploy

export REACT_APP_USERS_SERVICE_URL=http://121.0.0.1
docker-compose -f docker-compose-dev.yml up -d --build
docker-compose -f docker-compose-dev.yml \
  run users python manage.py recreate_db
