module.exports = function countCats(hiddenEars) {
  var foundCats = [];
  for (var i = 0; i < hiddenEars.length; i++) {
    var cats = hiddenEars[i].filter(ears => ears === "^^");
    foundCats = [...foundCats, ...cats];
  }
  return foundCats.length;
};
