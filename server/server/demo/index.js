var MAIN = require('../main.js');

function run(Request, Response) {
  var Params = MAIN.getParams(Request);
  if (Request.params && Request.params.name) {
    var funs = {
      query_state: test
    };
    funs[Request.params.name](Params, Request, Response);
  } else {
    Response.end('this is stub');
  }
}
/**
 * test
 * @param {Object} Request
 * @param {Object} Response
 */
function test(Params, Request, Response) {
  var fileName = 'demo/data/test.json';
  MAIN.responseStub(Response, fileName);
}

exports.index = run;
