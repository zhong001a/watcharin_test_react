pipeline {
    agent any

    stages {
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
