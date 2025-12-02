// Test script to check header rect values
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/travel-guides/mexico-city');
  await page.waitForTimeout(1000);
  
  const values = await page.evaluate(() => {
    const header = document.querySelector('[class*="guideCoverWrapper"]');
    if (!header) return null;
    const rect = header.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      height: rect.height,
      scrollY: window.scrollY,
      shouldBeSticky: rect.bottom <= 150
    };
  });
  
  console.log('Initial values:', values);
  
  // Scroll down
  await page.evaluate(() => window.scrollTo(0, 200));
  await page.waitForTimeout(500);
  
  const values2 = await page.evaluate(() => {
    const header = document.querySelector('[class*="guideCoverWrapper"]');
    if (!header) return null;
    const rect = header.getBoundingClientRect();
    return {
      top: rect.top,
      bottom: rect.bottom,
      height: rect.height,
      scrollY: window.scrollY,
      shouldBeSticky: rect.bottom <= 150,
      hasStickyClass: header.classList.contains('sticky')
    };
  });
  
  console.log('After scroll:', values2);
  
  await browser.close();
})();
