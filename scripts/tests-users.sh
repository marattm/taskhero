#!/bin/bash

# run

python services/users/manage.py test

# docker-compose -f docker-compose-dev.yml \
#   run users python manage.py test