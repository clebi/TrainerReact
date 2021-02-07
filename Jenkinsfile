node {
    agent {
        docker { image 'node:14-alpine' }
    }
    stage('Install dependencies') {
        sh 'npm install'
    }
    stage('Lint') {
        sh 'npm run lint'
    }
}