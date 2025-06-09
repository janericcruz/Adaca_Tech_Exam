const { By, until } = require('selenium-webdriver');

class TodoPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://todomvc.com/examples/react/dist/';
  }

  async open() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(By.className('new-todo')), 5000);
  }

  async addItem(text) {
    const input = await this.driver.findElement(By.className('new-todo'));
    await input.sendKeys(text + '\n');
  }

  async deleteItem(text) {
    const label = await this.driver.findElement(By.xpath(`//label[text()="${text}"]`));
    const todo = await label.findElement(By.xpath('./ancestor::li'));
    await this.driver.actions({ bridge: true }).move({ origin: todo }).perform();
    const destroyBtn = await todo.findElement(By.className('destroy'));
    await destroyBtn.click();
  }

  async isItemPresent(text) {
    const items = await this.driver.findElements(By.xpath(`//label[text()="${text}"]`));
    return items.length > 0;
  }
}

module.exports = TodoPage;
