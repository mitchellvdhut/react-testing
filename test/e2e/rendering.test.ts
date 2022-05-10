import 'expect-puppeteer'

// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://google.com')
//   })
//
//   it('should display "google" text on page', async () => {
//     await expect(page).toMatch('google')
//   })
// })

const {toMatchImageSnapshot} = require('jest-image-snapshot')
const puppeteer = require('puppeteer');

expect.extend({toMatchImageSnapshot})

// describe('visual reg. test', () => {
//
//   let browser:any;
//   beforeAll(async () => {
//     browser = await puppeteer.launch({ headless: false })
//   });
//
//   it('testing homepage', async () => {
//
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//
//     const image = await page.screenshot();
//
//     expect(image).toMatchImageSnapshot({
//       failureThreshold: 0.10,
//       failureThresholdType: 'percent'
//     });
//
//   });
//
//
//   afterAll(async () => {
//     await browser.close();
//   });
// });

function getConfig () {
  return {
    diffDirection: 'vertical',
    // useful on CI (no need to retrieve the diff image, copy/paste image content from logs)
    dumpDiffToConsole: true,
    // use SSIM to limit false positive
    // https://github.com/americanexpress/jest-image-snapshot#recommendations-when-using-ssim-comparison
    comparisonMethod: 'ssim',
  };
}


it(`no BPMN Gateway visual regression`, async () => {
  // Redirect the current page in the browser to a new url with puppeteer
  const response = await page.goto('http://localhost:3000');

    // Be sure the page is displayed correctly with puppeteer & Jest
    expect(response.status()).toBe(200);

  // Take the screenshot of the page with puppeteer
  const image = await page.screenshot({ fullPage: true });

  // Compare the taken screenshot with the baseline screenshot (if exists), or create it (else)
  const config = getConfig();
  expect(image).toMatchImageSnapshot();
});

