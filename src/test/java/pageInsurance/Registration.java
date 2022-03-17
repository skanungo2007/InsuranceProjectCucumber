package pageInsurance;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import baseInsurance.BaseClassInsurance;
import junit.framework.Assert;

public class Registration extends BaseClassInsurance {
	
	@FindBy(id="user_title")
	WebElement title;
	
	@FindBy(name="firstname")
	WebElement firstName;
	
	@FindBy(name="lastname")
	WebElement lastName;
	
	@FindBy(id="user_phone")
	WebElement phone;
	
	@FindBy(id="user_dateofbirth_1i")
	WebElement year;
	
	@FindBy(id="user_dateofbirth_2i")
	WebElement month;
	
	@FindBy(id="user_dateofbirth_3i")
	WebElement day;
	
	@FindBy(id="user_licenceperiod")
	WebElement licencePeriod;
	
	@FindBy(id="user_occupation_id")
	WebElement occupation;
	
	@FindBy(name="street")
	WebElement street;
	
	@FindBy(name="city")
	WebElement city;
	
	
	@FindBy(name="county")
	WebElement country;
	
	@FindBy(name="post_code")
	WebElement postalCode;
	
	@FindBy(name="email")
	WebElement userEmail;
	
	@FindBy(name="password")
	WebElement password;
	
	@FindBy(name="c_password")
	WebElement cnfPassword;
	
	@FindBy(xpath="//input[@type='submit']")
	WebElement subBtn;
	
	@FindBy(xpath="//input[@type='reset']")
	WebElement resBtn;
	
	
	public Registration(WebDriver driver) {
		
		this.driver = driver;
		
		PageFactory.initElements(driver, this);
	}
	
	public void verifyRegisterPage() {
		
		System.out.println(driver.getCurrentUrl());
		
		String expected = "Insurance Broker System - Register";
		
		String actual = driver.getTitle();
		
		Assert.assertEquals(expected, actual);
		
	}
	
	public void fillPersonalDetails(String salutation, String fname, String lname, String phn, String yr, String mnth, String dt, String lp, String occu) {
		
		Select titleDropdown = new Select(title);
		titleDropdown.selectByVisibleText(salutation);
		
		firstName.sendKeys(fname);
		lastName.sendKeys(lname);
		phone.sendKeys(phn);
		
		Select yearValue = new Select(year);
		yearValue.selectByVisibleText(yr);
		
		Select monthValue = new Select(month);
		monthValue.selectByVisibleText(mnth);
		
		Select dayValue = new Select(day);
		dayValue.selectByVisibleText(dt);
		
		Select lpValue = new Select(licencePeriod);
		lpValue.selectByVisibleText(lp);
		
		Select occValue = new Select(occupation);
		occValue.selectByVisibleText(occu);
		
		
	}
	
	public void fillOtherDetails(String st, String cty, String cntr, String pin, String email, String pwd, String cpwd) throws InterruptedException {
		
		street.sendKeys(st);
		city.sendKeys(cty);
		country.sendKeys(cntr);
		postalCode.sendKeys(pin);
		userEmail.sendKeys(email);
		password.sendKeys(pwd);
		cnfPassword.sendKeys(cpwd);
		
		subBtn.click();
		
		Thread.sleep(1000);
	}
}
