import { LucklyCreativePage } from './app.po';

describe('luckly-creative App', function() {
  let page: LucklyCreativePage;

  beforeEach(() => {
    page = new LucklyCreativePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
