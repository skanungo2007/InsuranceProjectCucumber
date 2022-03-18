package pageInsurance;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import baseInsurance.BaseClassInsurance;
import junit.framework.Assert;

public class LandingPage extends BaseClassInsurance {
	
	@FindBy(xpath="//h4")
	WebElement userName;
	
	@FindBy(css="input[value='Log out']")
	WebElement logOut;
	
	@FindBy(id="ui-id-2")
	WebElement reqQuotation;
	
	@FindBy(id="quotation_breakdowncover")
	WebElement breakDownCover;
	
	@FindBy(id="quotation_windscreenrepair_t")
	WebElement windScreenYes;
	
	@FindBy(id="quotation_windscreenrepair_f")
	WebElement windScreenNo;
	
	@FindBy(name="incidents")
	WebElement incident;
	
	@FindBy(name="registration")
	WebElement registration;
	
	@FindBy(name="mileage")
	WebElement mileage;
	
	@FindBy(name="value")
	WebElement estValue;
	
	@FindBy(id="quotation_vehicle_attributes_parkinglocation")
	WebElement parkLocation;
	
	@FindBy(id="quotation_vehicle_attributes_policystart_1i")
	WebElement pYear;
	
	@FindBy(id="quotation_vehicle_attributes_policystart_2i")
	WebElement pMonth;
	
	@FindBy(id="quotation_vehicle_attributes_policystart_3i")
	WebElement pDay;
	
	@FindBy(css="input[value='Calculate Premium']")
	WebElement calculate;
	
	@FindBy(id="resetquote")
	WebElement resetBtn;
	
	@FindBy(how=How.XPATH, using="//p[@id='calculatedpremium']")
	WebElement premiumValue;
	
	
	
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
	
	public void clickQuotation() {
		
		reqQuotation.click();
	}
	
	public void calculatePremium(String cover, String wind, String inc, String reg, String mlg, String val, String loc, String year, String month, String day) throws InterruptedException {
		
		Select coverValue = new Select(breakDownCover);
		coverValue.selectByVisibleText(cover);
		
		if(wind.equalsIgnoreCase("yes"))
			windScreenYes.click();
		else
			windScreenNo.click();
		
		incident.sendKeys(inc);
		registration.sendKeys(reg);
		mileage.sendKeys(mlg);
		estValue.sendKeys(val);
		
		Select pLoc = new Select(parkLocation);
		pLoc.selectByVisibleText(loc);
		
		Select polYear = new Select(pYear);
		polYear.selectByVisibleText(year);
		
		Select polMonth = new Select(pMonth);
		polMonth.selectByVisibleText(month);
		
		Select polDay = new Select(pDay);
		polDay.selectByVisibleText(day);
		
		calculate.click();
		
		Thread.sleep(1000);
		
		
	}
	
	public void getPremium() {
		
		System.out.println();
		
		System.out.println(premiumValue.getText());
	
		System.out.println();
		
		resetBtn.click();
		
	}

}
