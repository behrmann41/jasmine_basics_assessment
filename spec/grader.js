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

describe('average score', function(){
  it('takes a set of scores and returns the average grade', function(){
      expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
  });
});

describe('median score', function(){
  it('takes a set of scores and returns the median value', function(){
      expect(code.medianScore([52,80,80,86,94])).toEqual(80);
      expect(code.medianScore([1, 1, 2, 6, 6, 9])).toEqual(4);
  });
});

describe('mode score', function(){
  it('takes a set of scores and returns the mode value', function(){
      expect(code.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  });
});