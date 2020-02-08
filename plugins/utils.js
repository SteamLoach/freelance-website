import Vue from 'vue'

//Case Converters
export const toCase = {
  camel: (str) => {
        return str.replace(/([-_][a-z])/ig, ($1) => {
            return $1.toUpperCase()
                .replace('-', '')
                .replace('_', '');
        });
    },
  kebab: (str) => {
        return str && str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('-');
    },
  snake: (str) => {
        return str && str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
    },
}

//Returns a background image that can be used with :style
const setBackgroundImage = function(url) {
  return {backgroundImage: `url('${url}')` } ; 
}

//Scrolls the page to defined target
const scrollPage = function(target, axis = 'top', offset = false) {
  
  let targetOffset = 0  
  if (offset) {
    targetOffset = document.getElementById(offset).clientHeight;
  }
  
  if (document.getElementById(target)) {
    window.scrollTo({
      left: 0,
      top: (document.getElementById(target).getBoundingClientRect()[axis] + pageYOffset) - targetOffset,
      behavior: 'smooth',
    }); 
  } else {
    console.warn(`$scrollPage(${target}) failed because there is no element with the id="${target}" attribute`)
  }

}


//Returns a more human readabable date string
const dateString = function(str) {
  return new Date(str).toDateString();
}


//Concise debounce function
const debounce = function(fn, delay) {
  var timeoutID = null
  return function () {
    clearTimeout(timeoutID)
    var args = arguments
    var that = this
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}



//Component Only
Vue.prototype.$setBackgroundImage = setBackgroundImage;
Vue.prototype.$dateString = dateString;
Vue.prototype.$scrollPage = scrollPage;
Vue.prototype.$debounce = debounce;

//Context Injection
export default ({app}, inject) => {
  inject('toCase', toCase);
}