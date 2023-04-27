const puppeteer = require('puppeteer');

async function launchBrowser () {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setDefaultTimeout(30000); // Increase timeout to 30 seconds
    await page.goto(`https://www.mnalumnimarket.com/products/ccaps-coding-boot-camp-t-shirt?_pos=5&_sid=3f7d6a8fd&_ss=r`);
    await page.setViewport({
        width: 1099,
        height: 1299,
    });
    const addToCart = '.add-to-cart';
    await page.waitForSelector(addToCart);
    await page.click(addToCart);
    setTimeout(async () => {
        const checkoutBtn = '.cart__checkout';
        await page.waitForSelector(checkoutBtn);
        await page.click(checkoutBtn);
    }, 3000); // delay of 1 second
    setTimeout(async () => {
        const emailInput = '#email';
        await page.waitForSelector(emailInput);
        await page.type(emailInput, 'mcncstatefan@icloud.com');
    }, 2000); // delay of 2 seconds

    // await browser.close();
}

launchBrowser();

