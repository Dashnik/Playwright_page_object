import { expect, test } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { DocsPage } from '../../src/pages/DocsPage';

test('user can navigate from Home to Docs page @smoke', async ({ page }) => {
  const homePage = new HomePage(page);
  const docsPage = new DocsPage(page);

  await homePage.openHome();
  await homePage.clickDocs();
  await expect(docsPage.pageTitle).toHaveText(/Installation/i);
});
