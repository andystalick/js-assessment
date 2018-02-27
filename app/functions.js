exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(input2) {
      return `${str}, ${input2}`;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(val => {
      return function() {
        return fn(val);
      };
    });
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let myargs = Array.from(arguments);
    return myargs.reduce((accum, val) => val + accum);
  },

  callIt: function(fn) {
    let myargs = Array.from(arguments).slice(1);
    fn.apply(null, myargs);
  },

  partialUsingArguments: function(fn) {},

  curryIt: function(fn) {}
};
