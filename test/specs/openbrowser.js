const assert = require('assert');

describe('Belajarqa Test',  () => {
  it('should open kasirdemo.belajarqa.com and assert the URL', async () => {
    // Buka URL
    await browser.url('https://kasirdemo.belajarqa.com/');

    // Lakukan assertion pada URL
    const currentURL = await browser.getUrl();
    const expectedURL = 'https://kasirdemo.belajarqa.com/login';

    await assert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
  });
});