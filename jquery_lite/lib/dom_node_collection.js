class DOMNodeCollection {
  constructor(array){
    this.array = array;
  }

  html(string = null) {
    if (typeof string !== "string" ) {
      return this.array[0].innerHTML;
    }
    this.array.forEach( (el) => el.innerHTML = string);
  }

  empty() {
    this.html("");

  }
  append(collection){
    if (collection instanceof HTMLElement || typeof collection === 'string') {
      this.array.forEach( el => el.innerHTML += collection );
      return;
    }
    for(let i = 0; i < collection.length; i++){
      this.array.forEach((el2) => el2.innerHTML += collection[i].outerHTML);
      }

  }
  attr(attribute, value = null) {
    if (value === null){
      return this.array[0].getAttribute(attribute);
    }else {
      this.array.forEach(el => el.setAttribute(attribute,value))
    }
  }

  addClass(className) {
    className = " " + className;
    this.array.forEach( el => el.className += className);
  }

  removeClass(className) {
    this.array.forEach( el => el.classList.remove(className));
  }

  children() {
    let nodeChildren = [];
    this.array.forEach( (el) => {
      let arrChildren = Array.from(el.children);
      arrChildren.forEach(el2 => nodeChildren.push(el2));
    });
    // let arrnodeChildren = Array.from(nodeChildren);
    return new DOMNodeCollection(nodeChildren);
  }
  parent() {
  let nodeParents = [];
    this.array.forEach( (el) => {
      if(!nodeParents.includes(el.parentElement)){
        nodeParents.push(el.parentElement);
      }
    });
    return new DOMNodeCollection(nodeParents);
  }
  find(selector){ul
    let result = [];
    this.array.forEach(el => {
      let childArray = Array.from(el.querySelectorAll(selector));
      result = result.concat(childArray);
    });
    return new DOMNodeCollection(result);
  }
  remove() {
    this.array.forEach ( (el) => el.innerHTML = "");
    this.array = [];
  }

  on(type, callback) {
    this.array.forEach( el => {
      el.callback = callback;
      el.addEventListener(type, callback)
    });
  }

  off(type) {
    this.array.forEach( el => {
      el.removeEventListener(type, el.callback)
    });
  }

}

module.exports = DOMNodeCollection;
