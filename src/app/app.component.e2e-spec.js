describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("Reddit News");
  });

  it('should have <header>', function () {
    expect(element(by.css('my-reddit-app header')).isPresent()).toEqual(true);
  });

  it('should have <main>', function () {
    expect(element(by.css('my-reddit-app main')).isPresent()).toEqual(true);
  });

  it('main should have  <router-outlet>', function () {
    expect(element(by.css('main router-outlet')).isPresent()).toEqual(true);
  });

  it('should have <footer>', function () {
    expect(element(by.css('my-reddit-app footer')).getText()).toEqual("Webpack Angular 2 Starter");
  });

});
