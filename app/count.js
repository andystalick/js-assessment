exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    var cnt = start;
    function doCount() {
      window.console.log(cnt);
      if (cnt == end) {
        window.clearInterval(timerId);
      }
      cnt++;
    }
    var timerId = setInterval(doCount, 100);
  }
};
