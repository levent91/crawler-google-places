// NOTE: This is not nice, it waits for implementing default timeout into puppeteer.
exports.DEFAULT_TIMEOUT = 60 * 1000; // 60 sec

exports.LISTING_PAGINATION_KEY = 'lisState';
exports.MAX_PAGE_RETRIES = 6;

exports.PLACE_TITLE_SEL = 'h1[class*="header-title-title"]';
exports.BACK_BUTTON_SEL = 'button[jsaction*=back], button[aria-label="Back"]';
