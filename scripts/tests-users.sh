#!/bin/bash

# run

docker-compose -f docker-compose-dev.yml \
  run users python manage.py test