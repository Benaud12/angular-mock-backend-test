import { MockingTestPage } from './app.po';

describe('mocking-test App', function() {
  let page: MockingTestPage;

  beforeEach(() => {
    page = new MockingTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
