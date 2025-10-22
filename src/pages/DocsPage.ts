import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DocsPage extends BasePage {
  readonly pageTitle: Locator;
  readonly sidebar: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('h1');
    this.sidebar = page.locator('nav[aria-label="Main"]');
  }
}
