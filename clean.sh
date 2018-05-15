#!/bin/bash

# clean everything


# stop and remove all container
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# stop and remove all machine
docker-machine stop $(docker-machine ls | grep trainme | awk '{print $1}')
docker-machine rm -y $(docker-machine ls | grep trainme | awk '{print $1}')