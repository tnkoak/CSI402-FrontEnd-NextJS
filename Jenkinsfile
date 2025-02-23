pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                echo 'Cloning the repository...'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                bat 'docker build -t csi402 .'
            }
        }
        stage('Deploy') {  // เพิ่ม stage Deploy ที่ถูกต้อง
            steps {
                echo 'Deploying...'
                bat 'docker push your-registry/csi402:latest'  // ตัวอย่างคำสั่ง deploy
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