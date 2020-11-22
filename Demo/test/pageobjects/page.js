/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
      //return browser.url(`https://qa8.legalmatch.com/`)
      //return browser.url(`https://legalmatch.com/`)
      return browser.url(path)
    }

//    getRandomNumber () {
//      return Math.floor(Math.random() * 54)
//    }
}
