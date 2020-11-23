const HomePage = require('../pageobjects/home.page')
var BaseUrl = `https://qa9.legalmatch.com/`;

describe('Demo Exam', () => {

  it('STEP 1: NAVIGATE ' + BaseUrl, () => {
    HomePage.BrowsePage(BaseUrl);
    browser.maximizeWindow();
  });

  it('STEP 2: SELECT Govertnment on "Choose a Category" dropdown', () => {
      //HomePage.SelectCategoryByIndex(10);
      HomePage.SelectCategoryByInnerText("Government");
      browser.pause();
  });

  it('STEP 3: ENTER "00001" on "Zip Code or Location" and Validate', () => {
      HomePage.SetLocation('00001');
  });

  it('STEP 4: CLICK "Find a Great Lawyer" button', () => {
      HomePage.btnSubmit.click();
  });

  it('STEP 5: VERIFY if redirected to qa9.legalmatch.com/home/caseIntake.do page', () => {
      expect(browser).toHaveUrl(BaseUrl + 'home/caseIntake.do');
  });

  it('STEP 6: VERIFY that "Government" string can be found on the "xxx - Most Common Issues" form group label', () => {
      HomePage.VerifyElementTohaveText('legend','Government');
  });

  it('STEP 7: CLICK browsers "back" button', () => {
      browser.back();
  });

  it('STEP 8: CLICK "Click here" link', () => {
      HomePage.clickLink.click();
  });

  it('STEP 9: SELECT a random category and console.log the selected category', () => {
      HomePage.SelectRandomCategory();
  });

  it('STEP 10: VERIFY that you get redirected to qa9.legalmatch.com/home/caseIntake.do page', () => {
      expect(browser).toHaveUrl(BaseUrl + 'home/caseIntake.do');
  });

  it('STEP 11: VERIFY that "[selected category]" string can be found on the "xxx - Most Common Issues" form group label', () => {
      HomePage.VerifyElementTohaveText('legend', HomePage.GetSelectedCategoryValue());
  });

  it('STEP 12: CLICK browsers "back" button', () => {
      browser.back();
  });

  it('STEP 13: REPEAT steps 8-12 four more times', () => {
    var i;
    for (i = 1; i <= 4; i++) {
      HomePage.clickLink.click();

      var elem = $('.modal-content');
      elem.waitForDisplayed({ timeout: 50000 });

      HomePage.SelectRandomCategory();
      expect(browser).toHaveUrl(BaseUrl + 'home/caseIntake.do');
      HomePage.VerifyElementTohaveText('legend', HomePage.GetSelectedCategoryValue());
      browser.back();
    }
  });

  it('STEP 14: VALIDATE qa8.legalmatch.com page and scroll in a section', () => {
    HomePage.BrowsePage(BaseUrl);
    browser.pause(3000);
    expect(browser).toHaveUrl(BaseUrl);
    HomePage.testimonialView.scrollIntoView();
  });

  it('STEP 15: Click the "right carret button" n+1 times', () => {
    HomePage.MoveCarousel("Right");

  });

  it('STEP 16: Verify that after step 15, you end up back to the first qoute', () => {
    HomePage.ValidateSelectedCarousel();
  });

  it('STEP 17: Repeat step 15 & 16 but this time using the "left carret button"', () => {
    HomePage.MoveCarousel("Left");
    HomePage.ValidateSelectedCarousel();
  });

  it('STEP 18: VALIDATE qa8.legalmatch.com page and validate source section', () => {
    var elem = $('[name="keywords"]');
    expect(browser).toHaveUrl(BaseUrl);
    expect(elem).toHaveElementProperty('content', 'find a lawyer, find an attorney, find lawyers, find attorneys, legal help')
  });

});
