const {Builder, By, Key, util, Browser, WebDriver} =require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');

const assert = require('assert');
/*
let chai=require('chai');
let expect=chai.expect;
let assert=chai.assert;
*/


async function navigate_browser(){

    //let driver=  await new Builder().forBrowser('chrome').build();
    let driver=  await new Builder().forBrowser('chrome').build();
     await driver.get("https://angular.io/");

     await driver.manage().window().maximize();
     //console.log("url:",)
     let cookie1 =driver.findElement(By.className("cookies-popup no-print ng-star-inserted"));
     await driver.manage().setTimeouts({implicit:10000});
     cookie1.click();

    
     let cookie2=driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]/aio-cookies-popup[1]/div[1]/div[1]/button[1]/span[1]"));
     cookie2.click();
     //await driver.manage().setTimeouts({implicit:10000});
     let feature=driver.findElement(By.linkText("FEATURES"));

        feature.click();

        //assert

        /*
        
        let actual= await driver.findElement(By.xpath("//h1[@id='features--benefits']"));
       let aresult=actual.getText();
        console.log("Actual Text= ", actual);
        */

        
         let expect="FEATURES & BENEFITS";
        
        




     driver.quit();

}
navigate_browser();