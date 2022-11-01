package com.eagleeye.pages;

import com.eagleeye.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[text()='Get your copy!']")
    WebElement clickonlink;

   @CacheLookup
   @FindBy(id = "p_lt_ctl02_Meganav_rptPrimaryItems_ctl06_hypPrimaryNavItemNoDropDown")
    WebElement clickontext;
    @CacheLookup
    @FindBy( xpath= "//div[@class='col-xs-12 col-md-8 offset-md-2']")
    WebElement verifytext;

    @CacheLookup
    @FindBy (xpath = "//ul[@class='tabContent tabContent--menu nav navbar-nav float-md-right']/li")
    List<WebElement> modulebar;

    public void clickOnTheModuleBar (String module) throws InterruptedException {
        for (WebElement listmod : modulebar){
            if (listmod.getText().equalsIgnoreCase(module)){
                Thread.sleep(2000);
                listmod.click();
                break;
            }
        }
    }
        public void clickOnLink () {
            clickOnElement(clickonlink);
        }
    public void clickOntext () {
        clickOnElement(clickontext);
    }
        public String verifytext() {
                return getTextFromElement(verifytext);
            }
        }


