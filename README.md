# 🧩 Page Object Pattern with Playwright & TypeScript

## 📘 Overview

This project demonstrates the Page Object Model (POM) design pattern using TypeScript and Playwright.
It serves as a foundation for building maintainable, scalable, and readable UI test automation frameworks.

## ⚙️Getting Started

> **⚠️ Note:** Node.js **v22 or higher** is required to run this project.

To set up this project on your local machine:

1. Clone the repository
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Set up Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```
4. Launch tests:

   ```bash
   npx playwright test

   ```

## 🚀 Future Plans

- [x] Integrating tests into GitHub Actions as part of Continuous Integration.

- [ ] Set up a Prettier, tsconfig, linter and Husky for consistent code quality and formatting.

- [ ] Add API testing alongside UI tests.

- [ ] Store authentication keys securely in storageState or other locations supported by Playwright.

- [ ] Including reusable patterns directly in this repository such as Page-Factory.

- [ ] Implement fixture for BasePage and HomePage
