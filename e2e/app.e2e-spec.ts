
import {} from 'jasmine';
import { AppPage } from '../e2e/app.po';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Simple list', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Basic list');
  });

  it('header background should be rgba(255, 0, 0, 1)', () => {
    page.navigateTo();
    expect(page.getMatHeaderBackground()).toEqual('rgba(255, 0, 0, 1)');
  });

  it('should display a list of items', () => {
    page.navigateTo();
    expect(page.getAllListElements().count()).toBe(10);
  });

  // it('should open and view First Item Dropdown', () => {
  //   page.navigateTo();
  //   page.getFirstListElement().click();

  //   expect(page.getDropdownItems()).toBeTruthy();
  // });

});