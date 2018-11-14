#!/bin/bash

# run

yarn --cwd services/client/ test --verbose

# docker-compose -f docker-compose-dev.yml \
#   run client npm test --verbose
