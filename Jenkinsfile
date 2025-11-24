pipeline {
    agent any
    stages {
        stage("build"){
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                // echo 'hello world'
                sh '''
                ls -la
                node --version
                npm --version
                npm ci 
                npm run build
                ls -la
                '''
            }
        stage('Deploy'){
            agent {
                docker {
                    image 'node:18-apline'
                    reuseNode true
                }
                steps{
                    sh '''
                    npm install netlify-cli
                node_modules/.bin/netlify --version   
                    '''
                }
            }

        }
        }
    }
}
