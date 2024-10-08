const {Builder, By, Key, until} = require("selenium-webdriver");
let driver;
openGoogle();

async function openGoogle() {
//Program opens Chrome
  driver = await new Builder().forBrowser("chrome").build();
//Jumps to google.com
  await driver.get("http://www.google.com");
//Clicks on the "Ich stimme zu" button
  await click("Ich stimme zu");
// Fills the searchbar in google.com with "Developer Academy" and pushes enter
  await driver.findElement(By.name("q")).sendKeys("Developer Academy", Key.RETURN);
  
}
//This Function searches the whole HTML file after the text that it gets in its parameter
async function click(text) {
  await driver.findElement(By.xpath("//*[text() = '"+ text +"']")).click();
}