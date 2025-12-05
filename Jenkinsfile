pipeline {
  agent {
    docker {
      image 'node:18-alpine'
      args '-u root:root'
    }
  }

  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Install Dependencies') { steps { sh 'npm ci' } }
    stage('Lint') { steps { sh 'npm run lint' } }
    stage('Test') { steps { sh 'npm test' } }
    stage('Build') { steps { sh 'npm run build' } }

    stage('Deploy to Netlify (Production)') {
      when { branch 'develop' }
      environment {
        NETLIFY_AUTH_TOKEN = "nfp_Fi1dnyGKAxcqdWJCUji3dNBFyrKyx983b10f"
        NETLIFY_SITE_ID    = "3d11b97b-74e1-4a5d-8e6a-b2bce380dd06"
      }
      steps {
        sh 'npx netlify deploy --dir=dist --prod'
      }
    }

    stage('Deploy Preview (Non-develop branches)') {
      when { not { branch 'develop' } }
      environment {
        NETLIFY_AUTH_TOKEN = "nfp_Fi1dnyGKAxcqdWJCUji3dNBFyrKyx983b10f"
        NETLIFY_SITE_ID    = "3d11b97b-74e1-4a5d-8e6a-b2bce380dd06"
      }
      steps {
        sh 'npx netlify deploy --dir=dist'
      }
    }
  }
}
