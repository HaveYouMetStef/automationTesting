// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

// This test will require you to change some values in order to get your tests up and running
// You'll want to change each of the commented out pieces below
test('I can search Google', async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    const searchBar = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'))
    
    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await searchBar.sendKeys('Devmountain\n')

    // This line will pause our automation so you can see your search!
    await driver.sleep(2000)
});
    // We now want our automation to get the search bar again since we're on a new page
test('clear and search again', async () => {
   const searchBar = await driver.findElement(By.xpath('//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[2]/input'))

    // We'll use this line to clear out our old input.
    await searchBar.clear() 

    // Let's do another search!
    await searchBar.sendKeys('Texas State Bobcats\n')

    await driver.sleep(2000) 
});