import { FbaseappPage } from './app.po';

describe('fbaseapp App', () => {
  let page: FbaseappPage;

  beforeEach(() => {
    page = new FbaseappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
