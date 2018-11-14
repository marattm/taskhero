#!/bin/bash

# environment installation

sudo apt-get update

### Node
PACKAGE_NAME="node"
PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $PACKAGE_NAME|grep "install ok installed")
echo Checking for $PACKAGE_NAME: $PKG_OK
if [ "" == "$PKG_OK" ]; then
    echo "$PACKAGE_NAME. Setting up $PACKAGE_NAME."
    sudo apt-get install nodejs -y
    sudo apt-get install npm -y
    sudo ln -s /usr/bin/nodejs /usr/bin/node
fi



### Git
PACKAGE_NAME="git"
PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $PACKAGE_NAME|grep "install ok installed")
echo Checking for $PACKAGE_NAME: $PKG_OK
if [ "" == "$PKG_OK" ]; then
    echo "$PACKAGE_NAME. Setting up $PACKAGE_NAME."
    sudo apt-get install git -y
fi


### Python3.6
PACKAGE_NAME="python3"
PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $PACKAGE_NAME|grep "install ok installed")
echo Checking for $PACKAGE_NAME: $PKG_OK
if [ "" == "$PKG_OK" ]; then
    echo "$PACKAGE_NAME. Setting up $PACKAGE_NAME."
    sudo apt-get install python3.6
    sudo curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
    sudo python3 get-pip.py
    # pip install --user pipenv
    pip install virtualenv
    # apt-get install python3-venv
    sudo python3 get-pip.py
    sudo pip install virtualenv
fi



### Docker
PACKAGE_NAME="docker"
PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $PACKAGE_NAME|grep "install ok installed")
echo Checking for $PACKAGE_NAME: $PKG_OK
if [ "" == "$PKG_OK" ]; then
    echo "$PACKAGE_NAME. Setting up $PACKAGE_NAME."
    pip install docker
    sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common -y
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
    echo
    sudo apt-get install docker
    sudo apt-get update
    sudo apt-get install docker-ce -y
fi


### Docker Compose
PACKAGE_NAME="docker-compose"
PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $PACKAGE_NAME|grep "install ok installed")
echo Checking for $PACKAGE_NAME: $PKG_OK
if [ "" == "$PKG_OK" ]; then
    echo "$PACKAGE_NAME. Setting up $PACKAGE_NAME."
    sudo apt-get update
    sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi


### Docker Machine
PACKAGE_NAME="docker-machine"
PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $PACKAGE_NAME|grep "install ok installed")
echo Checking for $PACKAGE_NAME: $PKG_OK
if [ "" == "$PKG_OK" ]; then
    base=https://github.com/docker/machine/releases/download/v0.14.0 &&
    curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine &&
    sudo install /tmp/docker-machine /usr/local/bin/docker-machine
    echo
fi


### Postgres
PACKAGE_NAME="psql"
PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $PACKAGE_NAME|grep "install ok installed")
echo Checking for $PACKAGE_NAME: $PKG_OK
if [ "" == "$PKG_OK" ]; then
    echo "$PACKAGE_NAME. Setting up $PACKAGE_NAME."
    sudo apt-get install postgresql postgresql-contrib -y
    sudo update-rc.d postgresql enable
    sudo service postgresql start
fi

# ### VirtualBox
# PACKAGE_NAME="virtualbox"
# PKG_OK=$(dpkg-query -W --showformat='${Status}\n' $PACKAGE_NAME|grep "install ok installed")
# echo Checking for $PACKAGE_NAME: $PKG_OK
# if [ "" == "$PKG_OK" ]; then
#     echo "$PACKAGE_NAME. Setting up $PACKAGE_NAME."
#     sudo apt-get install virtualbox -y
# fi
