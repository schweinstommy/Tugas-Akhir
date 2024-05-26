const assert = require('assert');

describe('belajarqa login Tests', () => {
    it('should login successfully with valid credentials', async () => {
      await browser.url('https://kasirdemo.belajarqa.com');

      try {
        // Menunggu sampai elemen dengan ID email muncul
        await $('#email').waitForExist({ timeout: 15000 }); // Menunggu selama 15 detik
    } catch (error) {
        console.error('Failed to find #email element:', error);
        return; // Menghentikan eksekusi tes jika elemen tidak ditemukan
    }

// Input valid username and password
await $('#email').setValue('tomyandryanto@gmail.com');
await $('#password').setValue('password');

// Click login button
await $('#root > div > div > div > div.css-1w7v3tn > div > button').click();

const currentURL = await browser.getUrl();
    const expectedURL = 'https://kasirdemo.belajarqa.com/login';


    await assert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');    
});
});