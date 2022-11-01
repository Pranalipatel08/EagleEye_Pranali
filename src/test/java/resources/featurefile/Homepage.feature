Feature: HomePageModuleTest
  As a user i should navigate to all module page.

 Scenario Outline: verify i should navigate inside the module page.
    Given I am on home page
    When I click on module tab "<module>"
    Then I am navigated on module page
   Examples:
     | module        |
     |AIR Platform   |
     |Solutions      |
     |Partners       |
     |Company        |
  Scenario: verify i should able to click on link
    Given I am on home page
    When I click on link.
    Then I am navigated on Eagle Eye Air page
  Scenario: verify text.
    Given I am on home page
    When I click on ContactUs Button
    Then I verify that "Say Hello." message is display.



