package utilityInsurance;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class UtilityClassInsurance {
	
	public static String readProperty(String key) throws IOException {
		
		FileInputStream fis = new FileInputStream(System.getProperty("user.dir") + "\\src/test/java\\config\\config.properties");
		
		Properties property = new Properties();
		
		property.load(fis);
		
		return property.get(key).toString();
		
	}

}
