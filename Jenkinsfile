pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        // If you don't have lint script, remove this stage
        sh 'npm run lint'
      }
    }

    stage('Test') {
      steps {
        // If you don't have tests yet, you can remove this stage
        sh 'npm test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
        sh 'ls -la dist'
      }
    }

    stage('Deploy to Netlify (Production)') {
      when {
        branch 'develop'
      }

      environment {
        // NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')
        NETLIFY_SITE_ID    = 3d11b97b-74e1-4a5d-8e6a-b2bce380dd06
      }

      steps {
        sh '''
          npx netlify-cli --version
          npx netlify deploy --dir=dist --prod
        '''
      }
    }

    stage('Deploy Preview (Non-main branches)') {
      when {
        not { branch 'develop' }
      }

      environment {
        // NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')
        NETLIFY_SITE_ID    = 3d11b97b-74e1-4a5d-8e6a-b2bce380dd06
      }

      steps {
        sh '''
          npx netlify deploy --dir=dist
        '''
      }
    }
  }

  post {
    success {
      echo "✅ Pipeline successful. Netlify deploy done."
    }
    failure {
      echo "❌ Pipeline failed. Check Jenkins logs."
    }
  }
}
