// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
// create a base array
  var result = [];
  if (obj === undefined) {
    return "undefined";
  }
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i ++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }
  if (obj === null || obj === false || obj === true || typeof obj === 'number') {
    return '' + obj;
  }
  if (typeof obj === 'object') {
    // for ()
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
// return result
  return result;
};
