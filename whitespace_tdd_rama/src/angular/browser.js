const {Builder, By, Key, util, Browser, WebDriver} =require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

const assert = require('assert');


async function navigate_browser(){
    let driver=  await new Builder().forBrowser('chrome').build();
     await driver.get("https://angular.io/");

     await driver.manage().window().maximize();

     let cookie1 = await driver.findElement(By.className("cookies-popup no-print ng-star-inserted"));
     await cookie1.click();
    
     let cookie2= await driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]/aio-cookies-popup[1]/div[1]/div[1]/button[1]/span[1]"));
     await cookie2.click();

     let feature= await driver.findElement(By.linkText("FEATURES"));
     await feature.click();
        
    let url = await driver.getCurrentUrl();
    let expected = "https://angular.io/features";
    await assert (expected == url);

    await driver.get(url);
     let actualtext = await driver.findElement(By.id("features--benefits")).getText();
     let expectedtext = "FEATURES & BENEFITS";
     await assert (actualtext == expectedtext);

    driver.close();

}
navigate_browser();