pipeline {
  agent {
    docker {
      image 'node:9'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''yarn --cwd services/client install
yarn --cwd services/client build
'''
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