package testRunner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions (
		
			features = {".\\src/test/java\\features\\Register and Login.feature", ".\\src/test/java\\features\\CalculatePremium.feature"},
			glue = "stepDefinitions",
			format = {"pretty", "html:html_output", "json:json_output/jsonReport.json", "junit:junit_output/xmlReport.xml"},
			monochrome = true,
			dryRun = false,
			strict = true,
			tags = {"@Smoke, @Regression"}
	
		
		)


public class InsuranceTestRunner {
	
	TestNGCucumberRunner testNGCucumberRunner;
	
	@BeforeClass
	public void initialize() {
		
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
		
	}
	
	@Test(description="Insurance Project", dataProvider="getFeatures")
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
		
	}
	
	@DataProvider
	public Object[][] getFeatures() {
		
		return testNGCucumberRunner.provideFeatures();
		
	}
	
	@AfterClass
	public void closeSetup() {
		
		testNGCucumberRunner.finish();
		
	}
	
	
	

}
