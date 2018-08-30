import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeadingText() {
    return element(by.css('app-root div')).getText();
  }

  getMatHeaderBackground(){
    return element(by.css('.selected')).getCssValue('border-left-color'); 
  }

  getAllListElements() {
    return element.all(by.css('.mat-list-item'));
  }

  getFirstListElement() {
    return element(by.css('.mat-list-item'));
  }

  getFirstDropdownButton() {
    return element(by.css('.mat-icon-button'));
  }

  getDropdownItems() {
    return element(by.css('.cdk-overlay-pane'));
  }
  
  
}
