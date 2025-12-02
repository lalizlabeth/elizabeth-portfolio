// Test scroll behavior in increments
const scrollAmounts = [30, 60, 90, 120, 150, 180, 210, 240];

for (let amount of scrollAmounts) {
  await page.evaluate((y) => window.scrollTo(0, y), amount);
  await page.waitForTimeout(100);
  await page.screenshot({ path: `.playwright-mcp/scroll-${amount}.png` });
}
