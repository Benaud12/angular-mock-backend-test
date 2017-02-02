import { BrowserHelper } from './browser.page'
import { element, by, ElementFinder } from 'protractor';

export class MockingTestPage {
  browserHelper: BrowserHelper = new BrowserHelper();

  isTitleVisible() {
    return this.browserHelper.waitForElementToBeVisible(
      element(by.cssContainingText('h1', 'It\'s my stuff!')));
  }

  getStuffElement(): ElementFinder {
    return element(by.css('#stuff'));
  }

  getStuffText() {
    return this.browserHelper.waitForElementToBeVisible(
      this.getStuffElement())
      .then(() => {
        return this.getStuffElement().getText();
      });
  }
}
