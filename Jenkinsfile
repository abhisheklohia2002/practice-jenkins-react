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
        }
        stage("test"){
            steps{
                 sh '''
                ls -la
                npm ci 
                npm run test
                '''
            }
        }
    }
}
