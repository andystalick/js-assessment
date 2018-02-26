exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((accum, curr) => {
      return accum + curr;
    });
  },

  remove: function(arr, item) {
    return arr.filter(val => {
      return val !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    // pull off all instances of item in place
    //almost certainly needs to recurse
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    arr.forEach(val => {
      if (item == val) {
        count++;
      }
    });
    return count;
  },

  // could this one be more efficient?
  duplicates: function(arr) {
    const ret = [];
    let previousAdd = false;
    arr.sort();
    arr.forEach((val, i) => {
      if (val == arr[i + 1] && val !== previousAdd) {
        previousAdd = val;
        ret.push(val);
      }
    });
    return ret;
  },

  square: function(arr) {
    return arr.map(val => val * val);
  },

  findAllOccurrences: function(arr, target) {
    //return an array of the indicies of `target`
    let ret = [];
    arr.forEach((val, idx) => {
      if (val == target) {
        ret.push(idx);
      }
    });
    return ret;
  }
};
