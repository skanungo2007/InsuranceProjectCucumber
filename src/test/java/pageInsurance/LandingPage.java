package pageInsurance;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import baseInsurance.BaseClassInsurance;
import junit.framework.Assert;

public class LandingPage extends BaseClassInsurance {
	
	@FindBy(xpath="//h4")
	WebElement userName;
	
	@FindBy(css="input[value='Log out']")
	WebElement logOut;
	
	@FindBy(id="ui-id-2")
	WebElement reqQuotation;
	
	
	public LandingPage(WebDriver driver) {
		
		this.driver = driver;
		
		PageFactory.initElements(driver, this);
		
	}
	
	public void verifyAndValidate() {
		
		String expected = "Insurance Broker System";
		
		String actual = driver.getTitle();
		
		Assert.assertEquals(expected, actual);
		
		System.out.println("User Name: " + userName.getText());
		
		System.out.println();
		
	}
	
	public void logOut() throws InterruptedException {
		
		logOut.click();
		
		Thread.sleep(2000);
	}

}
