var Word = function(name) {
  this.name = name;
};

Word.prototype.reverse = function() {
  var reverse = this.name.split('').reverse().join('');
  return reverse;
};

module.exports = Word;
