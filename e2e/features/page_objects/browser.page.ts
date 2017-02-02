import { browser, ExpectedConditions, element, by, ElementFinder, WebDriver } from 'protractor';

export class BrowserHelper {
  baseUrl: string = browser.baseUrl;
  defaultTimeout: number = 5000;

  defaultWait(conditionFunction: Function) {
    return browser.wait(conditionFunction, this.defaultTimeout);
  }

  get(url: string) {
    return browser.get(this.baseUrl + url);
  }

  waitForElementToBeVisible(elementFinder: ElementFinder) {
    return this.defaultWait(ExpectedConditions.visibilityOf(elementFinder));
  }
}
