pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
            	script{
                echo 'Building..'
                sh 'docker build -t mo .'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
            	script{
                echo 'Deploying....'
                sh 'docker run -d -p 5000:5000 -p 3000:3000 mo'
                }
            }
        }
    }
}
