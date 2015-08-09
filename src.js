module.exports = {

  letterGrader: function(grade){
      if (grade >= 0 && grade < 60){
          return "F";
      }else if(grade >= 60 && grade < 70){
          return "D";
      }else if (grade >= 70 && grade < 80){
          return "C";
      }else if (grade >= 80 && grade < 90){
          return "B";
      }else if (grade >= 90){
          return "A";
      }
  },
  averageScore: function(scores){
      var avg = 0;
      scores.forEach(function(grade){
          avg += grade;
      })
      return avg / scores.length;
  },
  medianScore: function(scores){
      var median = Math.floor((scores.length - 1) / 2);
      if (scores.length % 2) {
        return scores[median];
      } else {
        return (scores[median] + scores[median + 1]) / 2;
      }
  },
  modeScore: function(scores){
      var occur = {};
      var max = 0; 
      var result; 
      for(var num in scores) {
        occur[scores[num]]=(occur[scores[num]] || 0) + 1; 
        if(occur[scores[num]] > max) {
                max = occur[scores[num]];  
                result = scores[num];     
        }
      }
      return result;
  }
};