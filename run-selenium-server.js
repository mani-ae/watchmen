/*
const p = new Promise((resolve, reject) =>
{
 setTimeout( 
   function() 
   {
     resolve(1);
     reject(new Error('message'));
   }, 2000);
});

p
 .then(result => console.log('Results', result))
 .catch(err => console.log('Error', err.message));
 */

function intervalFunc() {
  console.log('Cant stop me now!');
}

function seleniumTest() {
  var webdriver = require('selenium-webdriver'),
                    By = webdriver.By,
                    until = webdriver.until;

  var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

  driver.get('http://www.google.com');

  driver.findElement(By.name('q')).sendKeys('webdriver');

  driver.sleep(1000).then(function() {
    driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER);
  });

  //driver.findElement(By.name('btnK')).click();

  driver.sleep(10000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'webdriver - Google Search') {
        console.log('Test passed');
      }   else {
        console.log('Test failed');
      }
      driver.quit();
    });
  });
}

setInterval(seleniumTest, 30000);