pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'c5ba686e-e005-47c8-81e1-e242ecd4c285'
    }

    stages {

        stage("Build") {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    set -e
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }  // ✅ build stage closed properly

        stage("Deploy") {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    set -e
                    npm install netlify-cli
                    node_modules/.bin/netlify --version

                    echo "Deploying to production Site Id $NETLIFY_SITE_ID"
                '''
            }
        }
    }
}
