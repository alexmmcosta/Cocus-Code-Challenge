import { Page } from '@playwright/test';

export class AuthPage {
  readonly page: Page;
  private readonly accountButton;
  private readonly emailInput;
  private readonly passwordInput;
  private readonly signInButton;
  private readonly errorMessage;
  private readonly myAccountSummary;
  private readonly accountIcon;
  



  constructor(page: Page) {
    this.page = page;
     // Define constants for selectors
    this.accountButton = this.page.getByRole('button', { name: 'Sign in Sign in icon' });
    this.emailInput = this.page.getByRole('textbox', { name: 'Email or account number' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' })
    this.signInButton = this.page.getByRole('button', { name: 'Sign in' })
    this.errorMessage = this.page.getByText('There is a problemEnter a')
    this.myAccountSummary = this.page.getByRole('link', { name: 'Account Summary', exact: true })
    this.accountIcon = this.page.getByRole('link', { name: 'My account icon' })
  }

  async clickAccount() {
    await this.accountButton.click();
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }

  async clickAccountIcon() {
    await this.accountIcon.click();
  }

  async isSignedIn() {
    return this.myAccountSummary.isVisible();
  }

  async isErrorMessageVisible() {
    return this.errorMessage.isVisible();
  }
}