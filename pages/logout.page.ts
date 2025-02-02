import { Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;
  private readonly menuButton;
  private readonly signOutButton;
  private readonly accountButton;

  constructor(page: Page) {
    this.page = page;
     // Define constants for selectors
    this.menuButton = this.page.getByRole('button', { name: 'Menu' });
    this.signOutButton = this.page.getByRole('button', { name: 'Sign out' });
    this.accountButton = this.page.getByRole('button', { name: 'Sign in Sign in icon' });
  }

  async clickMenu() {
    await this.menuButton.click();
  }

  async clickSignOut() {
    await this.signOutButton.click();
  }

  async isSignedOut() {
    return this.accountButton.isVisible();
  }

}