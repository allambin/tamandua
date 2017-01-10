import { TamanduaPage } from './app.po';

describe('tamandua App', function() {
  let page: TamanduaPage;

  beforeEach(() => {
    page = new TamanduaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tam works!');
  });
});
