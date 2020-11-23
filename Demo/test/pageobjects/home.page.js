const Page = require('./page');
var RandomNumber;
var SelectCategoryValue;

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
    get testimonialView() { return $('.w-testimonials') }
    get btnNextCarousel() { return $('.w-testimonials .carousel-controls__next') }
    get btnPrevCarousel() { return $('.w-testimonials .carousel-controls__prev') }
    get activeCarousel() { return $('.carousel-dots__dot--active') }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. to Navigate the browser
    */

    // Method to use to select a category by index
    SelectCategoryByIndex (index) {
        this.clickChooseCategory.click();
        var elem = $('.case-intake-form__dropdown-item:nth-child('+index+')')
        elem.waitForExist({ timeout: 50000 });
        elem.click();
    }

    // Method to use to select a category by innerText
    SelectCategoryByInnerText (value) {
        var category = ["Family","Employment","Criminal Defense","Real State","Business","Immigration","Personal Injury","Wills Trusts & Estates","Bankruptcy & Finances","Government","Products & Services","Intellectual Property"];
        this.clickChooseCategory.click();
        var categoryIndex = category.indexOf(value) + 1;
        var elem = $('.case-intake-form__dropdown-item:nth-child('+ categoryIndex +')')
        elem.waitForExist({ timeout: 50000 });
        elem.click();
    }

    // Method to use to set location by zipcode
    SetLocation (zipcode) {
        this.inputLocation.setValue(zipcode);
        this.checkImage.waitForDisplayed({ timeout: 5000 });
      //const visibility = this.checkImage.getCSSProperty('visibility');
      //console.log(visibility);
    }

    // Method to Select and Click a random case category
    SelectRandomCategory () {
        this.SetRandomNumber ();
        var elem = $('.other-categories__item:nth-child('+this.GetRandomNumber()+')');
        elem.waitForExist({ timeout: 50000 });
        this.SetSelectedCategoryValue(elem.getText());
        console.log(elem.getText());
        browser.pause(3000);
        elem.click();
    }

    // Method to use to set a random number (setter)
    SetRandomNumber () {
        var temp = Math.floor(Math.random() * 54);
        RandomNumber = temp;
    }

    // Method to use to get the random number being set (getter)
    GetRandomNumber () {
        return RandomNumber;
    }

    // Method to use to set value, base on selected category
    SetSelectedCategoryValue (value) {
        SelectCategoryValue = value;
    }

    // Method to use to get value of the selected category
    GetSelectedCategoryValue () {
        return SelectCategoryValue;
    }

    // Method to verify selected category
    VerifySelectedCategory () {
        //browser.pause(5000);
        this.VerifyElementTohaveText('legend', this.GetSelectedCategoryValue());
    }

    // Method to use to perform a movement in a carrousel.
    // For now it's, specific to w-testimonials carrousel.
    MoveCarousel (control) {
        var i;
        for (i = 1; i <= 7; i++){
            if(control=="Right"){
                this.btnNextCarousel.click();
                browser.pause(1000);
            } else if (control=="Left") {
                this.btnPrevCarousel.click();
                browser.pause(1000);
            } else {
                // do nothing
            }
        }
    }

    // Method to validate active carrousel
    ValidateSelectedCarousel () {
        var elem = $('.w-testimonials .js-carousel-slider-testimonial-list:nth-child(1)');
        expect(elem).toBeDisplayed();
    }

    // Method to use to Verify element to have a text
    VerifyElementTohaveText(element, tempText){
        var elem = $(element);
        elem.waitForExist({ timeout: 30000 });
        expect(elem).toHaveTextContaining(tempText);
    }

    // Method to use browse a page
    BrowsePage (page) {
        return super.open(page);
    }

}

module.exports = new HomePage();
