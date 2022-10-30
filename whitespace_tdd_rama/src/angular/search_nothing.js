const {Builder, By, Key, util, Browser, WebDriver} =require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

const assert = require('assert');


async function search(){

    let driver=  await new Builder().forBrowser('chrome').build();
     await driver.get("https://angular.io/");
     await driver.manage().window().maximize();
     let cookie1 = await driver.findElement(By.className("cookies-popup no-print ng-star-inserted"));
     await cookie1.click();

     
     let cookie2= await driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]/aio-cookies-popup[1]/div[1]/div[1]/button[1]/span[1]"));
     await cookie2.click();

     let search = await driver.findElement(By.xpath("//input[@placeholder='Search']"));
     await search.sendKeys("NOTHING", Key.RETURN);


     let i = 0;
     while (true) {
        let x = await driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]")).getText();
        if (!x.includes("Searching ...") && i > 0) {
            break;
        }
        i += 1;
     }
     let results = await driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]")).getText();
     assert (results.includes("No results found."));
     driver.quit();

}
search();