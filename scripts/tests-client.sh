#!/bin/bash

# Test react app.
yarn --cwd /services/client test --verbose

# docker-compose -f docker-compose-dev.yml \
#   run client npm test --verbose
