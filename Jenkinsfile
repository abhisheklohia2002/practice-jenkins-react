pipeline {
  agent {
    docker {
      image 'node:18-alpine'
      reuseNode true
    }
  }

  stages {
    stage("Install") {
      steps {
        sh 'npm ci'
      }
    }

    stage("Test") {
      steps {
        sh 'npm test -- --watchAll=false'
      }
    }

    stage("Build") {
      steps {
        sh 'npm run build'
        sh 'test -f build/index.html'
      }
    }
  }
}
