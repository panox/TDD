var Word = require('./test.js');

describe('Word', function() {
  var word = new Word("panos");

  it('reverse the word', function() {
    word.reverse();
    expect(word.name).toEqual('sonap');
  });

});
