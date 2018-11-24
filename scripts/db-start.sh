#!/bin/bash

# recreate db

python services/users/manage.py init--db

# docker-compose -f docker-compose-dev.yml \
#   run users python manage.py recreate_db
