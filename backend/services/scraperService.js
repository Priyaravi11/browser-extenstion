const puppeteer = require("puppeteer");

exports.scrapePrice = async (productUrl) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(productUrl);
  const price = await page.evaluate(() => {
    return document.querySelector(".price").innerText;
  });

  await browser.close();
  return price;
};
