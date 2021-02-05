node {
    stage('Checkout') {
        checkout scm
    }
    stage('Install dependencies') {
        npm install
    }
    stage('Lint') {
        npm run lint
    }
}