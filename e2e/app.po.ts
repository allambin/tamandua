import { browser, element, by } from 'protractor';

export class TamanduaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tam-root h1')).getText();
  }
}
