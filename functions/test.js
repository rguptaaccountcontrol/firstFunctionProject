exports.handler = async function(context, event, callback) {
  // get the path
  const assets = Runtime.getAssets();
  const functions = Runtime.getFunctions();
  //////////////// CALL A exports.handler FUNCTION IN Functions folder /////////////////////////////////////
  // First, get the path for the Function
  let path = functions['hello-world'].path;  // note we do not put .js when the sile is in the functions folder
    
  console.log('The path to your Function is: ' + path);
  // Next, simply use the standard require() to bring the library into scope
  let zoltar = require(path);
  let kResult;
  // call the function associated with zoltar which is handler. The error will come in errr, the result will be in result
  let ahello = await zoltar.handler(context, event, (errr, result) => {kResult = result; console.log("result: " + JSON.stringify(result));  console.log("errr: " + JSON.stringify(errr));});
  
  console.log("kResult: " + JSON.stringify(kResult));
  console.log(kResult);
  ///////////////// CALL A FUNCTION privateMessage IN message.private.js file in assets folder ////////////////////////////
  // First, get the path for the asset and use the standard require() to bring the library into scope
  let xx = require(assets['/message.js'].path);  // note we put .js, the full file name when the file is in the assets folder
  // call the function associated with xx
  console.log(xx.privateMessage());
  let ww = xx.secondMessage('Param:aaa');
  console.log("ww: " + ww);
  /////////////////////////////////////////////

    let out = output_init();  // the function is in the same file
    console.log(out);
  ///////////////// CALL FUNCTION IN Functions folder in a seperate file ///////////////////////////
  let p = functions['test2'].path;  // note we do not put .js when the sile is in the functions folder
  console.log(p);
  let qq = require(p);
  let ff = await qq.addd(2,3);
  console.log(ff);
  ff = await qq.subb(2,3);
  console.log(ff);
  ///////////////////////////////////////////

  callback(null, out);
}

function output_init(){

  let bb = {
    "actions": [
      {
        "say": "from output_init functions, function in the same file as the calling function"
      },
      {
        "listen": true
      }
    ]
  }

  return bb;
}
