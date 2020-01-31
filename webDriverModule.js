const {Builder, Browser, By, until} = require('selenium-webdriver');

const webDriverModule = function () {
    this.driver = new Builder().forBrowser('chrome').build();
    const driver = this.driver;

    this.config = function () {
        driver.manage().setTimeouts({implicit: 45, pageLoad: 60}).then(function () {
            return true;
        }, function (error) {
            return false;
        });
        // driver.manage().window().setRect({x:0,y:0,height:600,width:900}).then(function () {
        //     return true;
        // }, function (error) {
        //     return false;
        // });
    };
    // driver.manage().setTimeouts({implicit: 100}).then(r => console.log());
    // driver.manage().windowSize(600,900);

    this.navigateTo = function (url) {
        return driver.get(url);
    };

    this.quit = function () {
        return driver.quit();
    };

    this.waitForElement = function (locator, TIMEOUT) {
        return driver.wait(until.elementLocated(By.css(locator)), TIMEOUT).then(function () {
            return true;
        }, function (error) {
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
    }

};

module.exports = webDriverModule;