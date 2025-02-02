import { test, expect } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';
import { BasePage } from '../pages/base.page';

test.describe('Test Jacamo authentication process', () => {
  let authPage: AuthPage;
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    basePage = new BasePage(page);
    await basePage.goto();
    await basePage.acceptCookies();
  });

  test('sign in to Jacamo', async () => {
    await authPage.clickAccount();
    await authPage.fillEmail('yocaper625@numerobo.com');
    await authPage.fillPassword('Test-Password');
    await authPage.clickSignInButton();
    await authPage.clickAccountIcon();
    expect(await authPage.isSignedIn());
  });

  test('sign in with wrong credentials', async () => {
    await authPage.clickAccount();
    await authPage.fillEmail('wrong-email@example.com');
    await authPage.fillPassword('wrong-password');
    await authPage.clickSignInButton();
    expect(await authPage.isErrorMessageVisible());
  });
});