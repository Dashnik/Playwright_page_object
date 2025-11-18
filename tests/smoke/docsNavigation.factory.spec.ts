import { test, expect } from '../fixtures/pages';

test('user can navigate from Home to Docs page using PageFactory @smoke @factory', async ({ pages }) => {
  await pages.home.openHome();
  await pages.home.clickDocs();
  await expect(pages.docs.pageTitle).toHaveText(/Installation/i);
});
