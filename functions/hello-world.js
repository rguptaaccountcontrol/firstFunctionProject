exports.handler = async function(context, event, callback) {

  //require(functions['/test.js'].path);
  const axios = require('axios');
  //const twiml = new Twilio.twiml.VoiceResponse();
  let aa = "This is a hello_world test";
  //console.log(aa);
 
  //await GreetingTaskHandler(context, event, callback);
  //twiml.say('Hello World 333!');
  let bb = {
    "actions": [
      {
        "say": "Hello, from functions. The function is in a seperate file and in functions folder"
      },
      {
        "listen": true
      }
    ]
  }
  callback({"abc":"abcd"},bb);

};

// greeting handler function
/*const greetingTaskHandler = async (context, event, callback) => {
    
  let aa = "This is a function test.js";
  console.log(aa);
  
  callback(null, aa);
}; */
