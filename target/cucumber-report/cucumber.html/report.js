$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePageModuleTest",
  "description": "As a user i should navigate to all module page.",
  "id": "homepagemoduletest",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on module tab \"\u003cmodule\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am navigated on module page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;",
  "rows": [
    {
      "cells": [
        "module"
      ],
      "line": 9,
      "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;1"
    },
    {
      "cells": [
        "AIR Platform"
      ],
      "line": 10,
      "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;2"
    },
    {
      "cells": [
        "Solutions"
      ],
      "line": 11,
      "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;3"
    },
    {
      "cells": [
        "Partners"
      ],
      "line": 12,
      "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;4"
    },
    {
      "cells": [
        "Company"
      ],
      "line": 13,
      "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5788689900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on module tab \"AIR Platform\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am navigated on module page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 228977200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AIR Platform",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.iClickOnModuleTab(String)"
});
formatter.result({
  "duration": 2242684800,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.iAmNavigatedOnModulePage()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.after({
  "duration": 709024000,
  "status": "passed"
});
formatter.before({
  "duration": 4052815700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on module tab \"Solutions\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am navigated on module page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Solutions",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.iClickOnModuleTab(String)"
});
formatter.result({
  "duration": 3314288600,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.iAmNavigatedOnModulePage()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.after({
  "duration": 648492900,
  "status": "passed"
});
formatter.before({
  "duration": 3369642800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on module tab \"Partners\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am navigated on module page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 78800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Partners",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.iClickOnModuleTab(String)"
});
formatter.result({
  "duration": 2292688300,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.iAmNavigatedOnModulePage()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.after({
  "duration": 685949000,
  "status": "passed"
});
formatter.before({
  "duration": 3426741200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "verify i should navigate inside the module page.",
  "description": "",
  "id": "homepagemoduletest;verify-i-should-navigate-inside-the-module-page.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on module tab \"Company\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am navigated on module page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 182500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 23
    }
  ],
  "location": "HomepageSteps.iClickOnModuleTab(String)"
});
formatter.result({
  "duration": 2347631700,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.iAmNavigatedOnModulePage()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.after({
  "duration": 681885500,
  "status": "passed"
});
formatter.before({
  "duration": 3241596100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify i should able to click on link",
  "description": "",
  "id": "homepagemoduletest;verify-i-should-able-to-click-on-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on link.",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I am navigated on Eagle Eye Air page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 74200,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.iClickOnLink()"
});
formatter.result({
  "duration": 1758116300,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.iAmNavigatedOnEagleEyeAirPage()"
});
formatter.result({
  "duration": 21900,
  "status": "passed"
});
formatter.after({
  "duration": 658668700,
  "status": "passed"
});
formatter.before({
  "duration": 3930182900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify text.",
  "description": "",
  "id": "homepagemoduletest;verify-text.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on ContactUs Button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verify that \"Say Hello.\" message is display.",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 82200,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.iClickOnContactUsButton()"
});
formatter.result({
  "duration": 1137921100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Say Hello.",
      "offset": 15
    }
  ],
  "location": "HomepageSteps.iVerifyThatMessageIsDisplay(String)"
});
formatter.result({
  "duration": 79763300,
  "status": "passed"
});
formatter.after({
  "duration": 669771300,
  "status": "passed"
});
});