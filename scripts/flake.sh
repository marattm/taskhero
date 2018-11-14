#!/bin/bash

# flake running


docker-compose -f docker-compose-dev.yml \
  run users flake8 project