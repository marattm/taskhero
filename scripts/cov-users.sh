#!/bin/bash

# users code coverage

python services/users/manage.py cov

# docker-compose -f docker-compose-dev.yml \
#   run users python manage.py cov