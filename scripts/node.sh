#!/bin/bash

sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf ~/.npm
brew uninstall --force --ignore-dependencies node
brew install node