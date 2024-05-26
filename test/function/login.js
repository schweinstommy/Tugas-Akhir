const login = async (username, password) => {
      await browser.url('https://kasirdemo.belajarqa.com');
  
    // Input username and password
    await $('#user-name').setValue(username);
    await $('#password').setValue(password);
  
    // Click login button
    await $('#login-button').click();
  
    // Assertion on the URL or any other element to verify successful login
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
  };

module.exports = { login }