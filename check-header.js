// Check header rect values at different scroll positions
console.log('=== Initial State ===');
const header = document.querySelector('[class*="guideCoverWrapper"]');
if (header) {
  const rect = header.getBoundingClientRect();
  console.log('rect.top:', rect.top);
  console.log('rect.bottom:', rect.bottom);
  console.log('rect.height:', rect.height);
  console.log('scrollY:', window.scrollY);
  console.log('rect.bottom <= 150:', rect.bottom <= 150);
  console.log('has sticky class:', header.classList.contains('sticky'));
}
