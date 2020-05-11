// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // setup an array, for results
  var results = [];
  node = node || document.body;
  var classNameArr = node.classList.split(' ');
// check document.body for className
// if find className store element in results array
  for (let i = 0; i < classNameArr.length; i++) {
    if (classNameArr[i] === className) {
      results.push(node);
    }
  }
  // node.classList
// for each child of current element... push getElements(className, child) into results array
// return results array
};
