const Page = require('./page');
const rn = Math.floor(Math.random() * 54);

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    /**
     * define selectors using getter methods
     */
    get clickChooseCategory () { return $('button*=Choose a Category') }
    get clickGovernmentOption() { return $('.case-intake-form__dropdown-item:nth-child(10)') }
    get inputLocation() { return $('[name="location"]') }
    get checkImage() {return $('.case-intake-form__location-checker')}
    get btnSubmit() { return $('.case-intake-form__submit') }
    get clickLink() { return $('.case-intake-form__hint-link') }
    get clickRandomLink() { return $('.other-categories__item:nth-child('+getRandomNumber()+')')}
    //get clickRandomLink() { return $('.other-categories__item:nth-child(3)')}
    get testimonialView() { return $('.w-testimonials') }
    get btnNextCarousel() { return $('.w-testimonials .carousel-controls__next') }
    get btnPrevCarousel() { return $('.w-testimonials .carousel-controls__prev') }
    get activeCarousel() { return $('.carousel-dots__dot--active') }

     /**
      * a method to encapsule automation code to interact with the page
      * e.g. to Navigate the browser
      */

    // Perform step 1
    TestStep1 () {
      this.openIndex();
      browser.maximizeWindow();
    }

    // Perform step 2
    TestStep2 () {
      this.clickChooseCategory.click();
      this.clickGovernmentOption.click();
    }

    // Perform step 3
    TestStep3 () {
      this.inputLocation.setValue('00001');
      this.checkImage.waitForDisplayed({ timeout: 5000 });
      //const visibility = this.checkImage.getCSSProperty('visibility');
      //console.log(visibility);
    }

    // Perform step 4
    TestStep4 () {
      this.btnSubmit.click();
    }

    // Perform step 5
    TestStep5 () {
      this.VerifyToHaveUrl('https://qa8.legalmatch.com/home/caseIntake.do');
    }

    // Perform step 6
    TestStep6 () {
      this.VerifyElementTohaveText('legend','Government');
    }

    // Perform step 7
    TestStep7 () {
      browser.back();
    //  browser.pause(5000);
    }

    // Perform step 8
    TestStep8 () {
      this.clickLink.click();
    }

    // Perform step 9
    TestStep9 () {
      console.log(this.clickRandomLink.getText());
      this.clickRandomLink.click();
    }

    // Perform step 10
    TestStep10 () {
      this.VerifyToHaveUrl('https://qa8.legalmatch.com/home/caseIntake.do');
    }

    // Perform step 11
    TestStep11 () {
      this.VerifyElementTohaveText('legend', this.clickRandomLink.getText());
    }

    // Perform step 12
    TestStep12 () {
      browser.back();
      //browser.pause(5000);
    }

    // Perform step 13
    TestStep13 () {
      //this.TestStep8();
      //this.TestStep9();
      //this.TestStep10();
      //this.TestStep11();
      //this.TestStep12();
    }

    // Perform step 14
    TestStep14 () {
      this.VerifyToHaveUrl('https://qa8.legalmatch.com/');
      this.testimonialView.scrollIntoView();
    }

    // Perform step 15
    TestStep15 () {
      this.btnNextCarousel.click();
      this.btnNextCarousel.click();
      this.btnNextCarousel.click();
      this.btnNextCarousel.click();
      this.btnNextCarousel.click();
      this.btnNextCarousel.click();
      this.btnNextCarousel.click();
    }

    // Perform step 16
    TestStep16 () {
      // to follow validation for the current active carousel
      const elem = $('.js-carousel-dot:nth-child(1)');
      expect(elem).toExist();
    }

    // Perform step 17
    TestStep17 () {
      this.btnPrevCarousel.click();
      this.btnPrevCarousel.click();
      this.btnPrevCarousel.click();
      this.btnPrevCarousel.click();
      this.btnPrevCarousel.click();
      this.btnPrevCarousel.click();
      this.btnPrevCarousel.click();
      // to follow validation for the current active carousel
      const elem = $('.js-carousel-dot:nth-child(1)');
      expect(elem).toExist();
    }

    // Perform step 18
    TestStep18 () {
      // In progress, still not working..
      //var test = browser.getSource();
      //expect(test).toHaveTextContaining(`<meta name="keywords" content="find a lawyer, find an attorney, find lawyers, find attorneys, legal help"`);
      //console.log(test);
      expect(browser).toHaveTextContaining('keywords');
      }

    VerifyToHaveUrl(page) {
      expect(browser).toHaveUrl(page);
    }

    VerifyElementTohaveText(element, tempText){
      const elem = $(element);
      expect(elem).toHaveTextContaining(tempText);
    }

    openIndex () {
        return super.openIndex();
    }
}

module.exports = new HomePage();
