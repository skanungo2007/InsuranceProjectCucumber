package stepDefinitions;

import java.util.List;
import java.util.Map;

import baseInsurance.BaseClassInsurance;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageInsurance.HomeInsurance;
import pageInsurance.LandingPage;
import pageInsurance.Registration;

public class StepDefinitionsInsurance extends BaseClassInsurance {
	
	
	@Before
	public void setup() {
		
		setupBrowser();
		
		
		
	}
	
	
	//Scenario 1
	//*******************************************************
	
	@Given("^User is on the home page$")
	public void user_is_on_the_home_page() throws Throwable {
	    
		HomeInsurance home = new HomeInsurance(driver);
		
		home.verifyHome();
	}

	@When("^User click on regsiter button$")
	public void user_click_on_regsiter_button() throws Throwable {
	    
		HomeInsurance home = new HomeInsurance(driver);
		
		home.naviagetToRegsiterPage();
		
		Registration register = new Registration(driver);
		
		register.verifyRegisterPage();
		
	}
	
	@Then("^User fills up personal details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_fills_up_personal_details_and_and_and_and_and_and_and_and(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9) throws Throwable {
	
		Registration register = new Registration(driver);
		
		register.fillPersonalDetails(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
		
	}

	@And("^Then fills other details like  and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and clicks Submit$")
	public void then_fills_other_details_like_and_and_and_and_and_and_and_and_clicks_Submit(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
	   
		Registration register = new Registration(driver);
		
		register.fillOtherDetails(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
	}

	@And("^User returns to home page if the registration is successfull$")
	public void user_returns_to_home_page_if_the_registration_is_successfull() throws Throwable {
	   
		HomeInsurance home = new HomeInsurance(driver);
		
		home.verifyHome();
		
	}

	@And("^User closes the browser$")
	public void user_closes_the_browser() throws Throwable {
	   
		closeBrowser();
	}

	
	//Scenario 2
	//*******************************************************
	
	@Given("^User visit the home page$")
	public void user_visit_the_home_page() throws Throwable {
	    
		HomeInsurance home = new HomeInsurance(driver);
		
		home.verifyHome();
	}

	@When("^User enters the credentials \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_credentials_and(String id, String pwd) throws Throwable {
	   
		HomeInsurance home = new HomeInsurance(driver);
		
		home.loginUser(id, pwd);
	}

	@Then("^User verifies and validates the login$")
	public void user_verifies_and_validates_the_login() throws Throwable {
	   
		LandingPage land = new LandingPage(driver);
		
		land.verifyAndValidate();
		
	}


	@And("^User clicks on logout$")
	public void user_clicks_on_logout() throws Throwable {
	    
		LandingPage land = new LandingPage(driver);
		
		land.logOut();
		
	}

	@And("^User closes browser$")
	public void user_closes_browser() throws Throwable {
	    
		closeBrowser();
		
	}


	//Scenario 3 Calculate Premium
	//******************************************************
		
	
		
	@Given("^User visits the Insurance Home Page and verifies the title$")
	public void user_visits_the_Insurance_Home_Page_and_verifies_the_title() throws Throwable {
	    
		HomeInsurance home = new HomeInsurance(driver);
		
		home.verifyHome();
		
	}

	@When("^User clicks login after giving the credentials$")
	public void user_clicks_login_after_giving_the_credentials(DataTable credentials) throws Throwable {
	    
		HomeInsurance home = new HomeInsurance(driver);
		
		List<List<String>> data = credentials.raw();
		
		home.loginUser(data.get(0).get(0), data.get(0).get(1));
		
		
	}

	@Then("^User validates the login by checking the profile name$")
	public void user_validates_the_login_by_checking_the_profile_name() throws Throwable {
	   
		
		LandingPage land = new LandingPage(driver);
		
		land.verifyAndValidate();
		
	}

	@Then("^User clicks on Request Quotation$")
	public void user_clicks_on_Request_Quotation() throws Throwable {
	   
		LandingPage land = new LandingPage(driver);
		
		land.clickQuotation();
		
	}

	@Then("^User gives the details for calulation$")
	public void user_gives_the_details_for_calulation(DataTable quoteValues) throws Throwable {
	    
		LandingPage land = new LandingPage(driver);
		
		for(Map<String, String> values: quoteValues.asMaps(String.class, String.class)) {
			
			land.calculatePremium(values.get("BreakDownCover"), values.get("Repair"), values.get("Incidents"), values.get("Registration"), values.get("Mileage"), values.get("Value"), values.get("Location"), values.get("Year"), values.get("Month"), values.get("Day"));
			
			
			land.getPremium();
		}
		
		
	}

	@Then("^User decides to log out$")
	public void user_decides_to_log_out() throws Throwable {
	    
		LandingPage land = new LandingPage(driver);
		
		land.logOut();
		
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	    
		closeBrowser();
		
	}



	

}
