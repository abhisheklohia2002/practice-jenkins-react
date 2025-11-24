pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'c5ba686e-e005-47c8-81e1-e242ecd4c285'
        // If you have a Netlify token, add it in Jenkins credentials and use:
        // NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
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
                    netlify --version

                    echo "Deploying to production Site Id $NETLIFY_SITE_ID"

                    # Put correct folder name below: dist / build / out
                    # netlify deploy --prod --dir=dist --site=$NETLIFY_SITE_ID
                '''
            }
        }
    }
}
