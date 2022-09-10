const { Builder, Capabilities, By } = require("selenium-webdriver")
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:54346/')
})

afterAll(async () => {
    await driver.quit()
})

test('add a movie to the list', async () => {
    const inputField = await driver.findElement(By.css('body > main > section > form > input'));
    await inputField.sendKeys('The waterboy\n')
    await driver.sleep(2000)
});

test('can strike through listed movie', async () => {
    const strikeThrough = await driver.findElement(By.css('body > main > ul > li > span'));
    await strikeThrough.click()
    await driver.sleep(2000)
});

test('unstrike through listed movie', async () => {
    const unstrikeThrough = await driver.findElement(By.css('body > main > ul > li > span'));
    await unstrikeThrough.click()
    await driver.sleep(2000)
});

test('add 2 movies to the list', async () => {
    const inputField = await driver.findElement(By.css('body > main > section > form > input'));
    await inputField.sendKeys('Warrior\n')
    await inputField.sendKeys('Friday Night Lights\n')
    await driver.sleep(2000)
});

test('delete movie from list', async () => {
    const deleteButton = await driver.findElement(By.xpath('/html/body/main/ul/li/button'));
    await deleteButton.click()
    await driver.sleep(2000)
})