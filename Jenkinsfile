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
            }
        }
        stage('Deploy Image') {
            steps {
                echo 'Deploying the image...'
            }
        }
        {
            stage('Testing') {
                steps {
                    echo 'Testing...'
                }
            }
        }
    }
}