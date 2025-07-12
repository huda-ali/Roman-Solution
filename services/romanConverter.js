function convertRoman(roman) {
    const romanMap = {
      I: 1, V: 5, X: 10,
      L: 50, C: 100, D: 500, M: 1000
    };
  
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
      const curr = romanMap[roman[i]];
      const next = romanMap[roman[i + 1]];
  
      if (next > curr) {
        total += (next - curr);
        i++;
      } else {
        total += curr;
      }
    }
  
    return total;
  }
  
  module.exports = { convertRoman };
  