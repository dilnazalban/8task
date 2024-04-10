import { setupPercy } from '@percy/puppeteer';

async function runVisualTests() {
  const percy = await setupPercy({
  });

  const browser = await percy.start();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');

  await percy.snapshot('Bulletin Board', {
    widths: [768, 992, 1200], 
  });

  await browser.close();
  await percy.stop();
}

runVisualTests();
