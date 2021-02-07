node {
  docker.image('node:14-alpine').inside {
    stage('Install dependencies') {
        sh 'npm install'
    }
    stage('Lint') {
        sh 'npm run lint'
    }
  }
}