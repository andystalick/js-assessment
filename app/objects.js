exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {},

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var res = [];
    var keys = Object.keys(obj);
    for (i = 0; i < keys.length; i++) {
      res.push(`${keys[i]}: ${obj[keys[i]]}`);
    }
    return res;
  }
};
