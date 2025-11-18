import { test as base, expect } from '@playwright/test';
import { PageFactory } from '../../src/page-factory/PageFactory';

export type Fixtures = {
  pages: PageFactory;
};

export const test = base.extend<Fixtures>({
  pages: async ({ page }, use) => {
    const factory = new PageFactory(page);
    await use(factory);
  },
});

export { expect };
