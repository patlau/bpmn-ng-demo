import { NgBpmnjsPage } from './app.po';

describe('ng-bpmnjs App', function() {
  let page: NgBpmnjsPage;

  beforeEach(() => {
    page = new NgBpmnjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
