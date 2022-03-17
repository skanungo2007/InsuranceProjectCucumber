package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (
		
			features = ".\\src/test/java\\features\\Insurance.feature",
			glue = "stepDefinitions",
			format = {"pretty", "html:html_output", "json:json_output/jsonReport.json", "junit:junit_output/xmlReport.xml"},
			monochrome = true,
			dryRun = false,
			strict = true,
			tags = {"@Smoke, @Regression"}
	
		
		)


public class InsuranceTestRunner {

}
