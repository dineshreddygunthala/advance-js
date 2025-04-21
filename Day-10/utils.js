// utils.js

function assignGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function isEven(n) {
    return n % 2 === 0;
  }
  
  module.exports = { assignGrade, add, isEven };
  