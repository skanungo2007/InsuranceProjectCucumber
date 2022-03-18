pipeline {


	agent {
		node {
			label 'master'
		}
	}
	
	tools {
	
		maven "Maven"
		
	}
	
	options {
		timestamps()
	}
	
	
	stages {
	
		stage('Build') {
		
			steps {
				
				git 'https://github.com/skanungo2007/InsuranceProjectCucumber.git'
				
				script {
					bat 'mvn compile'
				}
			}
		
		}
		
		stage('Test') {
		
			steps {
				
				git 'https://github.com/skanungo2007/InsuranceProjectCucumber.git'
				
				script {
					bat 'mvn test'
				}
			}
		
		}
	
	}
	
	post {
		
		always {
			
			step([$class : 'Publisher', reportFilenamePattern : '**/testng-results.xml'])
			
		}
	}		
	
}