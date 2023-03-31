pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                //docker build . -t mo
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                docker run -d -p 5000:5000 -p 3000:3000 mo
            }
        }
    }
}
