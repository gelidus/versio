// Generated by CoffeeScript 1.8.0
(function() {
  var Versio;

  module.exports = Versio = {
    toArray: function(v) {
      return v.split('.');
    },
    same: function(f, s) {
      return Versio.diff(f, s) === 0;
    },
    lower: function(f, s) {
      return Versio.diff(f, s) < 0;
    },
    higher: function(f, s) {
      return Versio.diff(f, s) > 0;
    },
    diff: function(f, s) {
      var d, dt, _i, _len;
      dt = Versio.delta(f, s);
      for (_i = 0, _len = dt.length; _i < _len; _i++) {
        d = dt[_i];
        if (d !== 0) {
          return d;
        }
      }
      return 0;
    },
    delta: function(f, s) {
      var fver, i, res, sver, _i, _ref;
      fver = Versio.toArray(f);
      sver = Versio.toArray(s);
      if (fver.length !== sver.length) {
        throw Error("Lengths of versions are not same");
      }
      res = [];
      for (i = _i = 0, _ref = fver.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (fver[i] === 'x' || sver[i] === 'x') {
          res.push(0);
        } else {
          res.push(parseInt(fver[i], 10) - parseInt(sver[i], 10));
        }
      }
      return res;
    }
  };

}).call(this);