import { BrowserHelper } from '../page_objects/browser.page';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

module.exports = function () {

  let browserHelper: BrowserHelper = new BrowserHelper();

  this.When(/^I open the app$/, () => {
    browserHelper.get('');
  });
}
