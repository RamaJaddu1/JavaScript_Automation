const {Builder, By, Key, util, Browser, WebDriver} =require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

const assert = require('assert');
/*
let chai=require('chai');
let expect=chai.expect;
let assert=chai.assert;
*/


async function search(){

    let driver=  await new Builder().forBrowser('chrome').build();
     await driver.get("https://angular.io/");
     driver.manage().window().maximize();
     let cookie1 =driver.findElement(By.className("cookies-popup no-print ng-star-inserted"));
     await driver.manage().setTimeouts({implicit:10000});
     cookie1.click();

     
     let cookie2=driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]/aio-cookies-popup[1]/div[1]/div[1]/button[1]/span[1]"));
     cookie2.click();

     let search=driver.findElement(By.xpath("//input[@placeholder='Search']"));
     await driver.manage().setTimeouts({implicit:10000});
     search.sendKeys("PROTRACTOR",Key.RETURN);
     await driver.manage().setTimeouts({implicit:10000});




     driver.quit();

}
search();