const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function (selector) {
  let result = [];
  // let functions = [];
  // functions.push(onload);
  // document.addEventListener("DOMContentLoaded", () => {
  //   functions.forEach((func) => func());
  // });
  if (selector instanceof HTMLElement) {
    result.push(selector);
    return new DOMNodeCollection(result);
  }

  const test = document.querySelectorAll(selector);

  return new DOMNodeCollection(test);
}
