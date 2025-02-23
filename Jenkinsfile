pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                echo 'Clonning the repository...'
            }
        }
        stage('Build') {
            steps {
                echo 'Building....'
                bat 'docker build -t csi402 .'
            }
        }
        stage('Deploy Image') {
            steps {
                echo 'Deploying the image...'
            }
        }
        stage('Testing') {  
            steps {
                echo 'Testing...'
                bat 'docker run -d --name csi402 -p 55555:3000 csi402:latest'
            }
        }
    }
}
