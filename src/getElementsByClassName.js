// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // setup an array, for results
  var results = [];
  node = node || document.body;
  var classNameArr = node.classList;
  for (let i = 0; i < classNameArr.length; i++) {
    if (classNameArr[i] === className) {
      results.push(node);
    }
  }
  var children = node.children;
  for (let i = 0; i < children.length; i++) {
    results = results.concat(getElementsByClassName(className, children[i]));
  }
  return results;
};
