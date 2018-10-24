#!/bin/bash


# Docker-Machine Developement Deploy

env=$1

if [[ "${env}" == "dev" ]]; then
    docker-machine create -d virtualbox taskhero-dev
    docker-machine env taskhero-dev
    eval $(docker-machine env taskhero-dev)
    URL0='http://'
    export REACT_APP_USERS_SERVICE_URL=$URL0$(docker-machine ip taskhero-dev)
    docker-compose -f docker-compose-dev.yml up -d --build
    docker-compose -f docker-compose-dev.yml \
      run users python manage.py initdb
    echo $URL0$(docker-machine ip taskhero-dev)
elif [[ "${env}" == "prod" ]]; then
  key=$(python keygen.py 2>&1 >/dev/null)
  export SECRET_KEY=$key
  echo $key
  docker-machine create --driver amazonec2 --amazonec2-open-port 80 --amazonec2-region us-west-2 taskhero-prod
  docker-machine env trainme-prod
  eval $(docker-machine env taskhero-prod)
  URL1='http://ec2-'
  URL0='http://'
  URL2=".us-west-2.compute.amazonaws.com"
  export REACT_APP_USERS_SERVICE_URL=$URL0$(docker-machine ip taskhero-prod)
  python3 services/swagger/spec-update.py $(docker-machine ip taskhero-prod)
  docker-compose -f Docker-compose-prod.yml up -d --build
  docker-compose -f Docker-compose-prod.yml \
    run users python manage.py initdb
  echo $URL0$(docker-machine ip taskhero-prod)  
else
    # Local Developement Deploy
    export REACT_APP_USERS_SERVICE_URL=http://121.0.0.1
    docker-compose -f docker-compose-dev.yml up -d --build
    docker-compose -f docker-compose-dev.yml run users python manage.py initdb
fi
