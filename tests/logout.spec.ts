import { test, expect } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';
import { BasePage } from '../pages/base.page';
import { LogoutPage } from '../pages/logout.page';

test.describe('Test Jacamo signout process', () => {
  let authPage: AuthPage;
  let basePage: BasePage;
  let logoutPage: LogoutPage;


  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    basePage = new BasePage(page);
    logoutPage = new LogoutPage(page);
    await basePage.goto();
    await basePage.acceptCookies();
  });

  test('sign out of Jacamo', async () => {
    await authPage.clickAccount();
    await authPage.fillEmail('yocaper625@numerobo.com');
    await authPage.fillPassword('Test-Password');
    await authPage.clickSignInButton();
    await logoutPage.clickMenu();
    await logoutPage.clickSignOut();
    expect(await logoutPage.isSignedOut());
  });
});