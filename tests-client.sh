#!/bin/bash

# run

docker-compose -f docker-compose-dev.yml \
  run client npm test
