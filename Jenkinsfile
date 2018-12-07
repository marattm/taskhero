pipeline {
  agent {
    docker {
      image 'node:9'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('install') {
      parallel {
        stage('herokucli') {
          steps {
            sh '''wget -qO- https://toolbelt.heroku.com/install.sh | sh
'''
          }
        }
        stage('client') {
          steps {
            sh 'yarn --cwd services/client install'
          }
        }
      }
    }
    stage('build') {
      steps {
        sh '''yarn --cwd services/client build
docker build -t app services/users/'''
      }
    }
  }
  environment {
    DOCKER_COMPOSE_VERSION = '1.18.0'
    DOCKER_USERNAME = ''
    DOCKER_PASSWORD = ''
    DATABASE_URL = ''
    APP_SETTINGS = ''
  }
}