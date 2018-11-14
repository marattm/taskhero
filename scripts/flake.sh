#!/bin/bash

# flake running


flake8 services/users/project

# docker-compose -f docker-compose-dev.yml \
#   run users flake8 project