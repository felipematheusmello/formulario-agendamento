import puppeteer from "puppeteer";


export const run = async (number:  number): Promise<any> => {
    const url = "https://wa.me/";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url + number);
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
}