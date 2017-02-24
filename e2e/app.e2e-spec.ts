import { D01Page } from './app.po';

describe('d01 App', function() {
  let page: D01Page;

  beforeEach(() => {
    page = new D01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
