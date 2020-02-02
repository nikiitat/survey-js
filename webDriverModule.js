const {Builder, Browser, By, until} = require('selenium-webdriver');
require('chromedriver');
const map = require("selenium-webdriver");

const webDriverModule = function () {
    const driver = new Builder().forBrowser('chrome').build();

    this.setupConfig = function () {
        driver.manage().setTimeouts({pageLoad: 30000}).catch((e) => {
            console.log(e)
        });
        driver.manage().window().maximize().catch((e) => {
            console.log(e)
        });
    };

    this.navigateTo = function (url) {
        return driver.get(url);
    };

    this.quit = function () {
        return driver.quit();
    };

    this.waitForElement = function (locator, TIMEOUT) {
        driver.sleep(1500).catch((e) => {
            console.log(e)
        });
        return driver.wait(until.elementLocated(By.css(locator)), TIMEOUT).then(function () {
            return true;
        }, function (error) {
            console.log(error);
            return false;
        });
    };

    this.selectCheckBox = function (locator) {
        return driver.findElement(By.css(locator)).click().then(function () {
            return true;
        }, function (error) {
            return false;
        });
    };

    this.clickByLocator = function (locator) {
        return driver.findElement(By.css(locator)).click().then(function () {
            return true;
        }, function (error) {
            return false;
        });
    };

    this.typeByLocator = function (locator, value) {
        return driver.findElement(By.css(locator)).sendKeys(value).then(function () {
            return true;
        }, function (error) {
            return false;
        });
    };

    this.clickAnswerByGivenName = function (name, locator) {
        driver.findElements(By.css(locator)).then(function (elements) {
            elements.map(function (el) {
                el.getText().then(function (txt) {
                    console.log(txt);
                    if (txt === name) {
                        el.click().then(function () {
                            return true;
                        }, function (error) {
                            return false;
                        })
                    }
                })
            })
        })
    };
};
module.exports = webDriverModule;