import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { LogAction } from '../decorators/LogAction';

export class HomePage extends BasePage {
  readonly docsLink: Locator;

  readonly getStartedButton: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.docsLink = page.locator('//nav//a[@href="/docs/intro"]');

    this.getStartedButton = page.locator('a:get-started');
    this.searchButton = page.locator('button[title="Search"]');
  }

  @LogAction('Clicking on Docs link')
  async clickDocs() {
    await this.docsLink.click();
  }

  @LogAction('Opening home page')
  async openHome() {
    await this.open('/');
  }
}
