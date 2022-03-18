@Regression
Feature: Calculate Premium


	Scenario: View Premium for the user
		Given User visits the Insurance Home Page and verifies the title
		When User clicks login after giving the credentials
		| sw@gmail.com	|	12345!	|
		Then User validates the login by checking the profile name
		Then User clicks on Request Quotation
		And User gives the details for calulation
		|	BreakDownCover	|	Repair	|	Incidents	|	Registration	| Mileage	|	Value	|	Location	  | Year	|	Month	| Day	|
		|	Roadside		|	Yes		|	Damage		|	WB02RT5599		| 39550		|	150000	|	Street/Road	  | 2020	|   June	|  25	|
		|	At home			|	No		|	Service		|	WB02TG4415		| 7455		|	951100	|	Locked Garage | 2019	| September	|  19	|
		Then User decides to log out
		And Close the browser
		