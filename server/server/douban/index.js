const { getParams, dLog, logger, responseStub } = require('../main.js');
const Fly = require('flyio');

function run(Request, Response) {
  const Params = getParams(Request);
  if (Request.params && Request.params.name) {
    const funs = {
      search: search,
      coming_soon: coming_soon,
      in_theaters: in_theaters,
      top250: top250,
      us_box: us_box,
      subject: subject
    };
    funs[Request.params.name](Params, Request, Response);
  } else {
    Response.end('this is stub');
  }
}
/**
 * coming_soon
 * @param {Object} Request
 * @param {Object} Response
 */
function coming_soon(Params, Request, Response) {
  const fileName = 'douban/data/coming_soon.json';
  responseStub(Response, fileName);
}

/**
 * in_theaters
 * @param {Object} Request
 * @param {Object} Response
 */
function in_theaters(Params, Request, Response) {
  const fileName = 'douban/data/in_theaters.json';
  responseStub(Response, fileName);
}

/**
 * top250
 * @param {Object} Request
 * @param {Object} Response
 */
function top250(Params, Request, Response) {
  const fileName = 'douban/data/top250.json';
  responseStub(Response, fileName);
}

/**
 * us_box
 * @param {Object} Request
 * @param {Object} Response
 */
function us_box(Params, Request, Response) {
  const fileName = 'douban/data/us_box.json';
  responseStub(Response, fileName);
}

/**
 * subject
 * @param {Object} Request
 * @param {Object} Response
 */
function subject(Params, Request, Response) {
  const fileName = 'douban/data/subject.json';
  responseStub(Response, fileName);
}

/**
 * search
 * @param {Object} Request
 * @param {Object} Response
 */
function search(Params, Request, Response) {
  const q = Params.q;
  let fileName = 'douban/data/search.json';
  if (!q || q === '') {
    fileName = 'douban/data/search_none.json';
  }
  responseStub(Response, fileName);
}

exports.index = run;
