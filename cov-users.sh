#!/bin/bash

# users code coverage

docker-compose -f docker-compose-dev.yml \
  run users python manage.py cov