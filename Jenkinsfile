pipeline {


	agent {
		node {
			label 'master'
		}
	}
	
	options {
		timestamps()
	}
	
	
	stages {
	
		stage('Build') {
		
			steps {
				
				git 'https://github.com/skanungo2007/InsuranceProjectCucumber.git'
				
				script {
					bat 'mvn clean install'
				}
			}
		
		}
	
	}
	
}