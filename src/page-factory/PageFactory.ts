import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { DocsPage } from '../pages/DocsPage';

/**
 * PageFactory provides lazy-initialized access to page objects bound to a Playwright Page instance.
 * This establishes a single source for constructing page objects and sharing state between them.
 */
export class PageFactory {
  private readonly page: Page;

  private _home?: HomePage;
  private _docs?: DocsPage;

  constructor(page: Page) {
    this.page = page;
  }

  get home(): HomePage {
    if (!this._home) {
      this._home = new HomePage(this.page);
    }
    return this._home;
  }

  get docs(): DocsPage {
    if (!this._docs) {
      this._docs = new DocsPage(this.page);
    }
    return this._docs;
  }
}
