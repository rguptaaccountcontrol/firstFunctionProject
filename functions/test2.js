
exports.addd = async function(x,y)
{
  return x + y;
}


exports.subb = async function(x,y)
{
  return x - y;
}


exports.handler = async function(context, event, callback)
{
  const functions = Runtime.getFunctions();
  let qq = require(functions['test2'].path);  // note we do not put .js when the sile is in the functions folder
  
  let ff = (await qq.subb(2,3)).toString();
  console.log(ff.toString());

  callback(null,ff);
}



