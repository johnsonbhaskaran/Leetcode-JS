(function () {
  function wrapValue(value) {
    return {
      getValue: function () {
        return value;
      },
      setValue: function (newValue) {
        value = newValue;
      },
    };
  }

  var x = wrapValue(5);
  console.log(x.getValue()); // output 5
  x.setValue(7);
  console.log(x.getValue()); // output 7
})();
