#!/bin/bash

# Test backend service.
python services/users/manage.py test

# docker-compose -f docker-compose-dev.yml \
#   run users python manage.py test