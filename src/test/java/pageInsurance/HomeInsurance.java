package pageInsurance;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import baseInsurance.BaseClassInsurance;
import junit.framework.Assert;

public class HomeInsurance extends BaseClassInsurance {

	@FindBy(how=How.XPATH, using="//a[text()='Register']")
	WebElement registerBtn;
	
	
	@FindBy(how=How.ID, using="email")
	@CacheLookup
	WebElement email;
	
	@FindBy(how=How.ID, using="password")
	@CacheLookup
	WebElement password;
	
	@FindBy(how=How.CSS, using="input[type='submit']")
	WebElement submitBtn;
	
	public HomeInsurance(WebDriver driver) {
		
		this.driver = driver;
		
		PageFactory.initElements(driver, this);
	}
	
	
	public void verifyHome() {
		
		System.out.println(driver.getCurrentUrl());
		
		String expectedTitle = "Insurance Broker System - Login";
		
		String actualTitle = driver.getTitle();
		
		Assert.assertEquals(expectedTitle, actualTitle);
		
	}
	
	
	public void naviagetToRegsiterPage() {
		
		registerBtn.click();
		
	}
	
	public void loginUser(String id, String pwd) throws InterruptedException {
		
		email.sendKeys(id);
		password.sendKeys(pwd);
		
		submitBtn.click();
		
		Thread.sleep(2000);
		
	}
}
