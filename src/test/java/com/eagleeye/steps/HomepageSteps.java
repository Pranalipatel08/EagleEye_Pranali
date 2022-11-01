package com.eagleeye.steps;

import com.eagleeye.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class HomepageSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on module tab \"([^\"]*)\"$")
    public void iClickOnModuleTab(String mod) throws Throwable {
       new HomePage().clickOnTheModuleBar(mod);
    }

    @Then("^I am navigated on module page$")
    public void iAmNavigatedOnModulePage() {
    }

    @When("^I click on ContactUs Button$")
    public void iClickOnContactUsButton() {
        new HomePage().clickOntext();
    }

    @Then("^I verify that \"([^\"]*)\" message is display\\.$")
    public void iVerifyThatMessageIsDisplay(String text) throws Throwable {
        Assert.assertEquals(text,new HomePage().verifytext());
    }

    @When("^I click on link\\.$")
    public void iClickOnLink() {
        new HomePage().clickOnLink();
    }

    @Then("^I am navigated on Eagle Eye Air page$")
    public void iAmNavigatedOnEagleEyeAirPage() {
    }


}
