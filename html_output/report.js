$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/Insurance.feature");
formatter.feature({
  "line": 1,
  "name": "Insurance Project",
  "description": "",
  "id": "insurance-project",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User Registration",
  "description": "",
  "id": "insurance-project;user-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on regsiter button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User fills up personal details \"\u003csalutation\u003e\" and \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cphone\u003e\" and \"\u003cyear\u003e\" and \"\u003cmonth\u003e\" and \"\u003cdate\u003e\" and \"\u003cperiod\u003e\" and \"\u003coccupation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Then fills other details like  and \"\u003cstreet\u003e\" and \"\u003ccity\u003e\" and \"\u003ccountry\u003e\" and \"\u003cpin\u003e\" and \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" and \"\u003cConfirmPassword\u003e\" and clicks Submit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User returns to home page if the registration is successfull",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "insurance-project;user-registration;",
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
      "line": 13,
      "id": "insurance-project;user-registration;;1"
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
      "line": 14,
      "id": "insurance-project;user-registration;;2"
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
      "line": 15,
      "id": "insurance-project;user-registration;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6719203800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Registration",
  "description": "",
  "id": "insurance-project;user-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on regsiter button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
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
  "line": 8,
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
  "line": 9,
  "name": "User returns to home page if the registration is successfull",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 543030100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_click_on_regsiter_button()"
});
formatter.result({
  "duration": 973453700,
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
  "duration": 3090083600,
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
  "duration": 4324626900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_returns_to_home_page_if_the_registration_is_successfull()"
});
formatter.result({
  "duration": 85111600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_closes_the_browser()"
});
formatter.result({
  "duration": 886001200,
  "status": "passed"
});
formatter.before({
  "duration": 4911008300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Registration",
  "description": "",
  "id": "insurance-project;user-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on regsiter button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
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
  "line": 8,
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
  "line": 9,
  "name": "User returns to home page if the registration is successfull",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 106092200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_click_on_regsiter_button()"
});
formatter.result({
  "duration": 1315519300,
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
  "duration": 3835593400,
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
  "duration": 3636465300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_returns_to_home_page_if_the_registration_is_successfull()"
});
formatter.result({
  "duration": 23162400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_closes_the_browser()"
});
formatter.result({
  "duration": 838894100,
  "status": "passed"
});
formatter.before({
  "duration": 5120539500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Check Login Function",
  "description": "",
  "id": "insurance-project;check-login-function",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User visit the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User enters the credentials \"dt@gmail.com\" and \"12345!\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User verifies and validates the login",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User clicks on logout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_visit_the_home_page()"
});
formatter.result({
  "duration": 114596200,
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
  "duration": 5958161000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_verifies_and_validates_the_login()"
});
formatter.result({
  "duration": 124756600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_clicks_on_logout()"
});
formatter.result({
  "duration": 3336668100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsInsurance.user_closes_browser()"
});
formatter.result({
  "duration": 817515700,
  "status": "passed"
});
});