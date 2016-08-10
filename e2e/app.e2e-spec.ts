import { EbcBackPage } from './app.po';

describe('ebc-back App', function() {
  let page: EbcBackPage;

  beforeEach(() => {
    page = new EbcBackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
