import { DDRatingPage } from './app.po';

describe('ddrating App', function() {
  let page: DDRatingPage;

  beforeEach(() => {
    page = new DDRatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
