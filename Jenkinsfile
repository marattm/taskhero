pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''yarn --cwd services/client install
yarn --cwd services/client build
docker build -t app services/users/
'''
      }
    }
  }
}