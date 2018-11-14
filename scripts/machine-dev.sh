#!/bin/bash

# run dev env machine

docker-machine create -d virtualbox trainme-dev
docker-machine env trainme-dev
eval $(docker-machine env trainme-dev)
docker-machine ls
docker-machine active
