const HomePage = require('../pageobjects/home.page')

describe('Demo Exam', () => {

  it('NAVIGATE https://qa8.legalmatch.com/', () => {
      HomePage.TestStep1();
  });

  it('SELECT Govertnment on "Choose a Category" dropdown', () => {
      HomePage.TestStep2();
  });

  it('ENTER "00001" on "Zip Code or Location" and Validate', () => {
      HomePage.TestStep3();
  });

  it('CLICK "Find a Great Lawyer" button', () => {
      HomePage.TestStep4();
  });

  it('VERIFY if redirected to qa8.legalmatch.com/home/caseIntake.do page', () => {
      HomePage.TestStep5();
  });

  it('VERIFY that "Government" string can be found on the "xxx - Most Common Issues" form group label', () => {
      HomePage.TestStep6();
  });

  it('CLICK browsers "back" button', () => {
      HomePage.TestStep7();
  });

  it('CLICK "Click here" link', () => {
      HomePage.TestStep8();
  });

  it('SELECT a random category and console.log the selected category', () => {
      HomePage.TestStep9();
  });

  it('VERIFY that you get redirected to qa8.legalmatch.com/home/caseIntake.do page', () => {
      HomePage.TestStep10();
  });

  it('VERIFY that "[selected category]" string can be found on the "xxx - Most Common Issues" form group label', () => {
      HomePage.TestStep11();
  });

  it('CLICK browsers "back" button', () => {
      HomePage.TestStep12();
  });

  it('REPEAT steps 8-12 four more times', () => {
      // Update this line of script to perform loop condition
      HomePage.TestStep13();
      HomePage.TestStep13();
      HomePage.TestStep13();
      HomePage.TestStep13();
  });

  it('VALIDATE qa8.legalmatch.com page and scroll in a section', () => {
      HomePage.TestStep14();
  });

  it('Click the "right carret button" n+1 times', () => {
      HomePage.TestStep15();
  });

  it('Verify that after step 15, you end up back to the first qoute', () => {
      HomePage.TestStep16();
  });

  it('Repeat step 15 & 16 but this time using the "left carret button"', () => {
      HomePage.TestStep17();
  });

  it('VALIDATE qa8.legalmatch.com page and validate source section', () => {
      HomePage.TestStep18();
  });

});
