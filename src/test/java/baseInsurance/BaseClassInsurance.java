package baseInsurance;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import utilityInsurance.UtilityClassInsurance;

public class BaseClassInsurance {

	protected static WebDriver driver;
	
	static String driverPath;
	
	public static void setupBrowser() {
		
		try {
			
			if(UtilityClassInsurance.readProperty("browser").equalsIgnoreCase("chrome")) {
				
				driverPath = System.getProperty("user.dir") + "\\drivers\\chromedriver.exe";
				
				System.setProperty("webdriver.chrome.driver", driverPath);
				
				driver = new ChromeDriver();
				
				
				
			} else if(UtilityClassInsurance.readProperty("browser").equalsIgnoreCase("edge")) {
				
				driverPath = System.getProperty("user.dir") + "\\drivers\\msedgedriver.exe";
				
				System.setProperty("webdriver.edge.driver", driverPath);
				
				driver = new EdgeDriver();
				
				
				
			} else if(UtilityClassInsurance.readProperty("browser").equalsIgnoreCase("firefox")) {
				
				driverPath = System.getProperty("user.dir") + "\\drivers\\geckodriver.exe";
				
				System.setProperty("webdriver.gecko.driver", driverPath);
				
				driver = new FirefoxDriver();
				
				
				
			} else {
				
				
				driverPath = System.getProperty("user.dir") + "\\drivers\\IEDriverServer.exe";
				
				System.setProperty("webdriver.ie.driver", driverPath);
				
				driver = new InternetExplorerDriver();
				
				
			}
			
			
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			
			driver.get(UtilityClassInsurance.readProperty("url"));
			
			
			
		} catch(Exception e) {
			
			System.out.println();
			
			System.out.println("Exception Inside Base Class: " + e);
			
			System.out.println();
		}
	}
	
	
	public static void closeBrowser() { 
		
		driver.quit();
		
	}
}
