const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const getDriver = require('../utils/driver');
const takeScreenshot = require('../utils/screenshot');
const TodoPage = require('../pages/TodoPage');
const { addTimestamp } = require('../utils/stringUtils');

describe('Selenium: Todo App Tests', function () {
  this.timeout(15000);
  let driver, todo;

  before(async () => {
    driver = getDriver();
    todo = new TodoPage(driver);
    await todo.open();
  });

  after(async () => {
    await driver.quit();
  });

  it('should add a to-do item', async () => {
    const itemText = addTimestamp('Buy milk');
    try {
      await todo.addItem(itemText);
      const exists = await todo.isItemPresent(itemText);
      expect(exists).to.be.true;
      console.log('✅ Add item test passed');
    } catch (err) {
      await takeScreenshot(driver, 'add-item');
      console.log('❌ Add item test failed');
      throw err;
    }
  });

  it('should delete a to-do item', async () => {
    const itemText = addTimestamp('Walk dog');
    try {
      await todo.addItem(itemText);
      await todo.deleteItem(itemText);
      const exists = await todo.isItemPresent(itemText);
      expect(exists).to.be.false;
      console.log('✅ Delete item test passed');
    } catch (err) {
      await takeScreenshot(driver, 'delete-item');
      console.log('❌ Delete item test failed');
      throw err;
    }
  });

  it('should simulate user login (skipped)', async () => {
    console.log('ℹ️ Login test skipped – no login form in this app');
  });
});
