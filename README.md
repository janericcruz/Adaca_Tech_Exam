# Adaca_Tech_Exam
Adaca Tech Exam using Selenium and Playwright

###Automation Test Engineer Technical Assessment

This is a Playwright test exam that checks if a new task can be added and or deleted.
Selected sample web application: [TodoMVC React App](https://todomvc.com/examples/react/dist)
---

###Setup Instructions

1. **Clone the repository:**

git clone https://github.com/janericcruz/Adaca_Tech_Exam.git
cd todo-tests

2. Install dependencies(tools):

npm install selenium-webdriver chromedriver mocha chai --save-dev
npm install --save-dev playwright
npx playwright install

3. Run tests

Run Selenium Tests (Mocha)
npx mocha test/todo.test.js

Run Playwright Test
npx playwright test playwright/form.test.js

###Brief explanation of test structure:

todo-tests/
│
├── test/                # Selenium tests
│   └── todo.test.js
│
├── playwright/          # Playwright tests
│   └── form.test.js
│
├── pages/               # Page Object for Selenium
│   └── TodoPage.js
│
├── utils/               # Helper functions
│   ├── driver.js
│   ├── screenshot.js
│   └── stringUtils.js



This covers:
-Selenium test suite with Page Object, waits, screenshots
-Playwright form interaction
-Shared JavaScript utility
-Clean and beginner-friendly code


###Assumptions:
-On this simple to-do web application I found, there is no login functionality exists on the test site.
-However, I tried to add a test if it has a login feature. (Not working)
-Test assumes the page loads and is ready when the test starts
-One utility function is shared to manipulate strings (e.g., add timestamp)

Test Scenario:
-Navigates to the app
-Adds a new to-do item
-Verifies it appears in the list
