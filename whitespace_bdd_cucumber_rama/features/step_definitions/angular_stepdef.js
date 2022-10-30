const assert = require('assert');
const {Builder, By, Key, util, Browser, WebDriver,setTimeouts,implicit,} =require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const { Given, When, Then } = require('@cucumber/cucumber');
let driver;
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Given('I navigate to angular website', function () {
  driver = new Builder().forBrowser('chrome').build();
  driver.get("https://angular.io/");
  driver.manage().window().maximize();
  let cookie1 = driver.findElement(By.className("cookies-popup no-print ng-star-inserted"));
  cookie1.click();
  let cookie2 = driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]/aio-cookies-popup[1]/div[1]/div[1]/button[1]/span[1]"));
  cookie2.click();
});


Given('I click the FEATURES button', async function () {
  let feature = driver.findElement(By.linkText("FEATURES"));
  await feature.click();
});

Then('the text FEATURES & BENEFITS is displayed', async function () {
  let url = await driver.getCurrentUrl();
  let expected = "https://angular.io/features";
  assert (expected == url);
  await driver.get(url);
  let actualtext = await driver.findElement(By.id("features--benefits")).getText();
  let expectedtext = "FEATURES & BENEFITS";
  assert (actualtext == expectedtext);
  driver.quit();
});

Given('I click the DOCS button', async function () {
  let docs = driver.findElement(By.linkText("DOCS"));
  await docs.click();
});

Then('the text Introduction to the Angular Docs is displayed', async function () {
  let url = await driver.getCurrentUrl();
  let expected = "https://angular.io/docs"
  assert (expected == url);
  await driver.get(url);
  let actualtext = await driver.findElement(By.id("introduction-to-the-angular-docs")).getText();
  let expectedtext = "Introduction to the Angular Docs";
  assert (actualtext == expectedtext);
  driver.quit();
});


Then('Some results are found', async function () {
  let i = 0;
  while (true) {
    let x = await driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]")).getText();
    if (!x.includes("Searching ...") && i > 0) {
        break;
    }
    i += 1;
  }
  let results = await driver.findElement(By.xpath("/html[1]/body[1]/aio-shell[1]")).getText();
  assert (!results.includes("No results found."));
  driver.quit();
});


Given('I search for text {string}', function (string) {
  let search = driver.findElement(By.xpath("//input[@placeholder='Search']"));
  search.sendKeys(string, Key.RETURN);
});


Then('No result found', async function () {
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
});

