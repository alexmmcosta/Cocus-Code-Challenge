import { Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    private readonly cookiesButton;

    constructor(page: Page) {
      this.page = page;
      this.cookiesButton = this.page.getByRole('button', { name: 'Accept All Cookies' });
    }

    async goto() {
        await this.page.goto('/');
    }

    async acceptCookies() {
        await this.cookiesButton.click();
    }

}