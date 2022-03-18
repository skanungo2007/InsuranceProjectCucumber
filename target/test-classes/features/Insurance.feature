Feature: Insurance Project

	@Smoke
	Scenario Outline: User Registration
		Given User is on the home page
		When User click on regsiter button
		Then User fills up personal details "<salutation>" and "<firstName>" and "<lastName>" and "<phone>" and "<year>" and "<month>" and "<date>" and "<period>" and "<occupation>"
		And Then fills other details like  and "<street>" and "<city>" and "<country>" and "<pin>" and "<email>" and "<password>" and "<ConfirmPassword>" and clicks Submit
		And User returns to home page if the registration is successfull
		And User closes the browser
		
	Examples:
	| salutation |	firstName	|	lastName	|	phone	| year | month 		 | date | period |	occupation	|	street	      |	city	 |	country	|	pin	 |	email	    |	password	|	ConfirmPassword	|
	|	Mr		 |	David		|	Thompson	| 5527466851| 1991 | September   | 21   |   4    |  Engineer	| Red Wood St     |	Kolkata  |  India   | 700256 | dt@gmail.com |	12345!		|	12345!			|		
	|	Mrs		 |	Sunita		|	Williams	| 9445882365| 1991 | December    |  15  |   2    |  Doctor	    | Green Avenue St |	Kolkata  |  India   | 700744 | sw@gmail.com |	12345!		|	12345!			|
	
	
	
	@Regression
	Scenario: Check Login Function
		Given User visit the home page 
		When User enters the credentials "dt@gmail.com" and "12345!"
		Then User verifies and validates the login
		And User clicks on logout
		And User closes browser
	
	
		
		