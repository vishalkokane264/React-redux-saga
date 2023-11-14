pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your React app from version control (e.g., Git)
                git 'https://github.com/yourusername/your-react-app.git'
            }
        }

        stage('Build') {
            steps {
                // Install Node.js and dependencies
                sh 'npm install'

                // Build the React app
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                // Copy the built React app to the Nginx web root
                sh 'sudo cp -r build/* /var/www/html/'

                // Restart Nginx to apply changes
                sh 'sudo systemctl restart nginx'
            }
        }
    }

    post {
        always {
            // Cleanup steps if needed
        }
    }
}
