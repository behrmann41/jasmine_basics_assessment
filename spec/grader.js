var code = require('../src.js');

describe('letter grader', function(){
  it('takes a test score and returns the equivalent letter grade', function(){
      expect(code.letterGrader(91)).toEqual("A");
      expect(code.letterGrader(84)).toEqual("B");
      expect(code.letterGrader(72)).toEqual("C");
      expect(code.letterGrader(65)).toEqual("D");
      expect(code.letterGrader(58)).toEqual("F");
  });
});