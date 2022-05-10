import 'expect-puppeteer'
const {toMatchImageSnapshot} = require('jest-image-snapshot')
expect.extend({toMatchImageSnapshot})

// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://google.com')
//   })
//
//   it('should display "google" text on page', async () => {
//     await expect(page).toMatch('google')
//   })
// })

describe('homepage', () => {

  it('no visual changes on homepage', async () => {
    // Redirect the current page in the browser to a new url with puppeteer
    const response = await page.goto('http://localhost:3000');

    // Be sure the page is displayed correctly with puppeteer & Jest
    expect(response.status()).toBe(200);

    // Take the screenshot of the page with puppeteer
    const image = await page.screenshot({ fullPage: true });

    // Compare the taken screenshot with the baseline screenshot (if exists), or create it (else)
    expect(image).toMatchImageSnapshot();
  });

  it('displays a name when search is executed', async () => {
    await page.type('#searchInput', 'Lisa')
    await page.keyboard.press('Enter')
    await expect(page).toMatch('Lisa')
  })
})
