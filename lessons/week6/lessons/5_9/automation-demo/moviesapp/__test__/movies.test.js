const { Builder, Browser, By, until, Key } = require("selenium-webdriver");
const { elementIsDisabled } = require("selenium-webdriver/lib/until");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

const addMovie = async (movieTitle) => {
    await driver
      .findElement(By.css('input[name="movieTitle"]'))
      .sendKeys(movieTitle);
    await driver.findElement(By.css('button[type="submit"]')).click();
  };
  
  test("can mark a movie as watched", async () => {
    await driver.get("http://localhost:3000/");
  
    await addMovie("The Matrix");
    const addedMovie = await driver.wait(
      until.elementLocated(By.css("#movies-list li")),
      1000
    );
    await addedMovie.findElement(By.css('input[type="checkbox"]')).click();
  });
  
  test("can remove a movie", async () => {
    await driver.get("http://localhost:3000/");
    await addMovie("The Matrix");
    const addedMovie = await driver.wait(
      until.elementLocated(By.css("#movies-list li")),
      1000
    );
    await addedMovie.findElement(By.css("button.delete-btn")).click();
    await driver.wait(until.stalenessOf(addedMovie), 1000);
  });
  
  test("notification appears when a movie is removed", async () => {
    await driver.get("http://localhost:3000/");
    await addMovie("The Matrix");
    const addedMovie = await driver.wait(
      until.elementLocated(By.css("#movies-list li")),
      1000
    );
    await addedMovie.findElement(By.css("button.delete-btn")).click();
    await driver.wait(
      until.elementTextContains(driver.findElement(By.id("message")), "deleted!"),
      1000
    );
  });
  