exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((res, rej) => {
      res(value);
    });
  },

  manipulateRemoteData: function(url) {
    return fetch('/data/testdata.json')
      .then(response => {
        let data = response.json();
        return data;
      })
      .then(response => {
        return response.people.map(val => val.name);
      })
      .then(response => {
        return response.sort();
      });
  }
};
