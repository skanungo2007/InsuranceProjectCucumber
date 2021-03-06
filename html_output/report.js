$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/CalculatePremium.feature");
formatter.feature({
  "line": 2,
  "name": "Calculate Premium",
  "description": "",
  "id": "calculate-premium",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 6642391300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "View Premium for the user",
  "description": "",
  "id": "calculate-premium;view-premium-for-the-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User visits the Insurance Home Page and verifies the title",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks login after giving the credentials",
  "rows": [
    {
      "cells": [
        "sw@gmail.com",
        "12345!"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User validates the login by checking the profile name",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Request Quotation",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User gives the details for calulation",
  "rows": [
    {
      "cells": [
        "BreakDownCover",
        "Repair",
        "Incidents",
        "Registration",
        "Mileage",
        "Value",
        "Location",
        "Year",
        "Month",
        "Day"
      ],
      "line": 12
    },
    {
      "cells": [
        "Roadside",
        "Yes",
        "Damage",
        "WB02RT5599",
        "39550",
        "150000",
        "Street/Road",
        "2020",
        "June",
        "25"
      ],
      "line": 13
    },
    {
      "cells": [
        "At home",
        "No",
        "Service",
        "WB02TG4415",
        "7455",
        "951100",
        "Locked Garage",
        "2019",
        "September",
        "19"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User decides to log out",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_visits_the_Insurance_Home_Page_and_verifies_the_title()"
});
formatter.result({
  "duration": 502496200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_clicks_login_after_giving_the_credentials(DataTable)"
});
formatter.result({
  "duration": 4959018500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_validates_the_login_by_checking_the_profile_name()"
});
formatter.result({
  "duration": 77935500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_clicks_on_Request_Quotation()"
});
formatter.result({
  "duration": 176539000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_gives_the_details_for_calulation(DataTable)"
});
formatter.result({
  "duration": 6704110000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_decides_to_log_out()"
});
formatter.result({
  "duration": 3842476700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.close_the_browser()"
});
formatter.result({
  "duration": 837235900,
  "status": "passed"
});
formatter.uri("./src/test/java/features/Register and Login.feature");
formatter.feature({
  "line": 2,
  "name": "Insurance Project Login and Registration",
  "description": "",
  "id": "insurance-project-login-and-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User Registration",
  "description": "",
  "id": "insurance-project-login-and-registration;user-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on regsiter button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User fills up personal details \"\u003csalutation\u003e\" and \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cphone\u003e\" and \"\u003cyear\u003e\" and \"\u003cmonth\u003e\" and \"\u003cdate\u003e\" and \"\u003cperiod\u003e\" and \"\u003coccupation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Then fills other details like  and \"\u003cstreet\u003e\" and \"\u003ccity\u003e\" and \"\u003ccountry\u003e\" and \"\u003cpin\u003e\" and \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" and \"\u003cConfirmPassword\u003e\" and clicks Submit",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User returns to home page if the registration is successfull",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "insurance-project-login-and-registration;user-registration;",
  "rows": [
    {
      "cells": [
        "salutation",
        "firstName",
        "lastName",
        "phone",
        "year",
        "month",
        "date",
        "period",
        "occupation",
        "street",
        "city",
        "country",
        "pin",
        "email",
        "password",
        "ConfirmPassword"
      ],
      "line": 14,
      "id": "insurance-project-login-and-registration;user-registration;;1"
    },
    {
      "cells": [
        "Mr",
        "David",
        "Thompson",
        "5527466851",
        "1991",
        "September",
        "21",
        "4",
        "Engineer",
        "Red Wood St",
        "Kolkata",
        "India",
        "700256",
        "dt@gmail.com",
        "12345!",
        "12345!"
      ],
      "line": 15,
      "id": "insurance-project-login-and-registration;user-registration;;2"
    },
    {
      "cells": [
        "Mrs",
        "Sunita",
        "Williams",
        "9445882365",
        "1991",
        "December",
        "15",
        "2",
        "Doctor",
        "Green Avenue St",
        "Kolkata",
        "India",
        "700744",
        "sw@gmail.com",
        "12345!",
        "12345!"
      ],
      "line": 16,
      "id": "insurance-project-login-and-registration;user-registration;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4805655200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Registration",
  "description": "",
  "id": "insurance-project-login-and-registration;user-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on regsiter button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User fills up personal details \"Mr\" and \"David\" and \"Thompson\" and \"5527466851\" and \"1991\" and \"September\" and \"21\" and \"4\" and \"Engineer\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Then fills other details like  and \"Red Wood St\" and \"Kolkata\" and \"India\" and \"700256\" and \"dt@gmail.com\" and \"12345!\" and \"12345!\" and clicks Submit",
  "matchedColumns": [
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User returns to home page if the registration is successfull",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 25031500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_click_on_regsiter_button()"
});
formatter.result({
  "duration": 918108100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 32
    },
    {
      "val": "David",
      "offset": 41
    },
    {
      "val": "Thompson",
      "offset": 53
    },
    {
      "val": "5527466851",
      "offset": 68
    },
    {
      "val": "1991",
      "offset": 85
    },
    {
      "val": "September",
      "offset": 96
    },
    {
      "val": "21",
      "offset": 112
    },
    {
      "val": "4",
      "offset": 121
    },
    {
      "val": "Engineer",
      "offset": 129
    }
  ],
  "location": "StepDefinitionsInsurance.user_fills_up_personal_details_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2664304700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Red Wood St",
      "offset": 36
    },
    {
      "val": "Kolkata",
      "offset": 54
    },
    {
      "val": "India",
      "offset": 68
    },
    {
      "val": "700256",
      "offset": 80
    },
    {
      "val": "dt@gmail.com",
      "offset": 93
    },
    {
      "val": "12345!",
      "offset": 112
    },
    {
      "val": "12345!",
      "offset": 125
    }
  ],
  "location": "StepDefinitionsInsurance.then_fills_other_details_like_and_and_and_and_and_and_and_and_clicks_Submit(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3282362800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_returns_to_home_page_if_the_registration_is_successfull()"
});
formatter.result({
  "duration": 42752100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_closes_the_browser()"
});
formatter.result({
  "duration": 781501400,
  "status": "passed"
});
formatter.before({
  "duration": 4744912600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Registration",
  "description": "",
  "id": "insurance-project-login-and-registration;user-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on regsiter button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User fills up personal details \"Mrs\" and \"Sunita\" and \"Williams\" and \"9445882365\" and \"1991\" and \"December\" and \"15\" and \"2\" and \"Doctor\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Then fills other details like  and \"Green Avenue St\" and \"Kolkata\" and \"India\" and \"700744\" and \"sw@gmail.com\" and \"12345!\" and \"12345!\" and clicks Submit",
  "matchedColumns": [
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User returns to home page if the registration is successfull",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 31994000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_click_on_regsiter_button()"
});
formatter.result({
  "duration": 942580100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 32
    },
    {
      "val": "Sunita",
      "offset": 42
    },
    {
      "val": "Williams",
      "offset": 55
    },
    {
      "val": "9445882365",
      "offset": 70
    },
    {
      "val": "1991",
      "offset": 87
    },
    {
      "val": "December",
      "offset": 98
    },
    {
      "val": "15",
      "offset": 113
    },
    {
      "val": "2",
      "offset": 122
    },
    {
      "val": "Doctor",
      "offset": 130
    }
  ],
  "location": "StepDefinitionsInsurance.user_fills_up_personal_details_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2495238500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green Avenue St",
      "offset": 36
    },
    {
      "val": "Kolkata",
      "offset": 58
    },
    {
      "val": "India",
      "offset": 72
    },
    {
      "val": "700744",
      "offset": 84
    },
    {
      "val": "sw@gmail.com",
      "offset": 97
    },
    {
      "val": "12345!",
      "offset": 116
    },
    {
      "val": "12345!",
      "offset": 129
    }
  ],
  "location": "StepDefinitionsInsurance.then_fills_other_details_like_and_and_and_and_and_and_and_and_clicks_Submit(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3269538800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_returns_to_home_page_if_the_registration_is_successfull()"
});
formatter.result({
  "duration": 33283000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_closes_the_browser()"
});
formatter.result({
  "duration": 783173600,
  "status": "passed"
});
formatter.before({
  "duration": 4714738900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Check Login Function",
  "description": "",
  "id": "insurance-project-login-and-registration;check-login-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User visit the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters the credentials \"dt@gmail.com\" and \"12345!\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User verifies and validates the login",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User clicks on logout",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_visit_the_home_page()"
});
formatter.result({
  "duration": 29508300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dt@gmail.com",
      "offset": 29
    },
    {
      "val": "12345!",
      "offset": 48
    }
  ],
  "location": "StepDefinitionsInsurance.user_enters_the_credentials_and(String,String)"
});
formatter.result({
  "duration": 5608887600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_verifies_and_validates_the_login()"
});
formatter.result({
  "duration": 78568300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_clicks_on_logout()"
});
formatter.result({
  "duration": 3150788400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_closes_browser()"
});
formatter.result({
  "duration": 793224400,
  "status": "passed"
});
});