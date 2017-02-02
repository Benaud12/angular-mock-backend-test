import { MockingTestPage } from '../page_objects/app.page';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

module.exports = function () {

  let page: MockingTestPage = new MockingTestPage();

  this.Given(/^an anonymous user$/, () => {
    return;
  });

  this.Then(/^I should see the app title$/, () => {
    return expect(page.isTitleVisible()).to.eventually.equal(true);
  });

  this.Then(/^I should see the default stuff$/, () => {
    return expect(page.getStuffText())
      .to.eventually.equal('MOCKED RESPONSE BITCHES!');
  });
}


