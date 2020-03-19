const wdio = require('webdriverio');

const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "Pixel_2_API_28",
    app: "/home/snehal/AndroidStudioProjects/MyApplication/app/build/outputs/apk/debug/app-debug.apk",
    appPackage: "com.example.myapplication",
    appActivity: ".MainActivity",
    automationName: "UiAutomator2",
    fullReset: "true"
  }
};

async function main () {
  console.log('Snehal Program has started');
  
  // Client initialization
  client = await wdio.remote(opts);
  
  /* 
    ------------------ Test For the First Screen ------------------ 
  */
  // All the Ids of First Screen
  editText = await client.findElement('id', 'editText');
  editText2 = await client.findElement('id', 'editText2');
  button = await client.findElement('id', 'button');
  console.log('editText',editText);
  
  // Case for the Wrong Id/Password
  client.elementSendKeys(editText.ELEMENT, 'test');
  client.elementSendKeys(editText2.ELEMENT, 'password');
  client.elementClick(button.ELEMENT);

  // Case for the right Id/Password
  client.elementSendKeys(editText.ELEMENT, 'admin');
  client.elementSendKeys(editText2.ELEMENT, 'admin');
  client.elementClick(button.ELEMENT);

  client.waitUntil(()=> client.findElement('id', 'etDay'), 50000);

  /* 
    ------------------ Test For the Second Screen ------------------ 
  */
  // All the Ids of Second Screen
  etDay = await client.findElement('id', 'etDay');
  bsubmit = await client.findElement('id', 'bsubmit');
  console.log('etDay',etDay);
  console.log('bsubmit',bsubmit);

  // Input for the Alert
  client.elementSendKeys(etDay.ELEMENT, 'Monday');
  client.elementClick(bsubmit.ELEMENT);

  //To close the app
  //await client.deleteSession();
}

main();
