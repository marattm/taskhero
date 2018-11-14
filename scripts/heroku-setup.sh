#!/bin/bash

# heroku deployment
heroku login
REPO=$(heroku create | cut -d'/' -f 3 | cut -d'.' -f 1)
echo
echo $REPO
echo
git init
heroku git:remote -a $REPO
