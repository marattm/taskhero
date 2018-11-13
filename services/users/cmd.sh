#!/bin/bash

# install and running command for virtual env
virtualenv -p python3.6 venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver


# docker
sudo docker-compose -f docker-compose-dev.yml build
sudo docker-compose -f docker-compose-dev.yml up -d
docker-compose -f docker-compose-dev.yml up -d --build # sanity check
docker-compose -f docker-compose-dev.yml \
  run users python manage.py recreate_db

    # postgre
    docker exec -ti $(docker ps -aqf "name=users-db") psql -U postgres
    \c users_dev
    \dt
    \q


    # testing 
    docker-compose -f docker-compose-dev.yml \
        run users python manage.py test
    
    #  dev env machine
    docker-machine create -d virtualbox trainme-dev
    docker-machine env trainme-dev
    eval $(docker-machine env trainme-dev)
    docker-machine ls
    docker-machine active # update the active host


    # deployment prod machine
    docker-machine create --driver amazonec2 trainme-prod
    docker-machine env trainme-prod
    eval $(docker-machine env trainme-prod)
    docker-machine ls
    docker-machine active # update the active host


# stop and remove all container
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# stop and remove all machine
docker-machine stop $(docker-machine ls | grep trainme | awk '{print $1}')
docker-machine rm -y $(docker-machine ls | grep trainme | awk '{print $1}')

# launch a machine 
docker-machine create

# clean ALL
docker system prune --all --force --volumes