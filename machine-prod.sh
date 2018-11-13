#!/bin/bash

# deployment prod machine
docker-machine create --driver amazonec2 trainme-prod
docker-machine env trainme-prod
eval $(docker-machine env trainme-prod)
docker-machine ls
docker-machine active # update the active host
