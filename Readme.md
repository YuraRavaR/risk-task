# This project is created as a test task for RISK


This project contains end-to-end tests using Playwright and TS

## Installation

1.  Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2.  Clone this repository:
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd makeup-registration-tests
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Running Tests

You can run the tests in several ways:

* **In all browsers (Chromium, Firefox, WebKit):**
    ```bash
    npx playwright test
    ```
* **Chromium only:**
    ```bash
    npx playwright test --project=chromium
    ```
* **Firefox only:**
    ```bash
    npx playwright test --project=firefox
    ```
* **WebKit only:**
    ```bash
    npx playwright test --project=webkit
    ```

By default, the browser runs in headless mode. If you want to see the browser while tests are running, add --headed:

```bash
npx playwright test --project=chromium --headless 
 ```

## Reports

To open the latest HTML test report, run:

```bash
npx playwright show-report
 ```



## Useful Commands
UI Mode: Opens an interactive interface where you can browse, run, and debug tests visually

```bash
npx playwright test --ui
 ```