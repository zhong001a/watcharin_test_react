pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git 'https://github.com/your-username/your-react-project.git'
            }
        }

        stage('Build') {
            steps {
                // Build the Docker image
                script {
                    docker.build("movie-service:1.1", "-f /service/Dockerfile")
                }
            }
        }

        stage('Deploy') {
            steps {
                // Push the Docker image to a registry or deploy as needed
            }
        }
    }
}
