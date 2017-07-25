import { QrealtimePage } from './app.po';

describe('qrealtime App', () => {
  let page: QrealtimePage;

  beforeEach(() => {
    page = new QrealtimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
