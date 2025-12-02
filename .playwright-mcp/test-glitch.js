// Test script - scroll through transition zone and capture screenshots
const scrollPoints = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300];

for (const scrollY of scrollPoints) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await page.waitForTimeout(100); // Wait for transition
  await page.screenshot({ path: `glitch-test-${scrollY}px.png` });
  console.log(`Screenshot at ${scrollY}px`);
}
