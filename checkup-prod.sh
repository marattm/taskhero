#!/bin/bash

# checkup prod


docker-compose -f Docker-compose-prod.yml up -d --build

docker-compose -f Docker-compose-prod.yml \
  run users python manage.py recreate_db

docker-compose -f Docker-compose-prod.yml \
  run users python manage.py seed_db

docker-compose -f Docker-compose-prod.yml \
  run users python manage.py test