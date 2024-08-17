const{ test, expect } = require('@playwright/test')
test('Verify Logo', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('img', { name: 'company-branding' }).click();
    await expect(page).toBeTruthy();
  });
test("Valid login page", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill('Admin')
    await page.getByPlaceholder("Password").fill('admin123')
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/dashboard/);
})
test('Logout', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await expect(page).toHaveURL(/login/);
  });
/*
  test('Forgot Password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByText('Forgot your password?').click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByRole('button', { name: 'Reset Password' }).click();
    await page.getByText('Reset Password link sent successfullyA reset password link has been sent to you').click();
    await expect(page).toHaveURL("sendPasswordReset");
  });
  */
/*
  test('Invalid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('ADMIN123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' }).click();
    await expect(page).getByText("Invalid Credentials");
  });
  */
  test('Support page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
    await page.locator('#app div').filter({ hasText: 'Getting Started with' }).nth(3).click();
    await expect(page).toBeTruthy();
  });
