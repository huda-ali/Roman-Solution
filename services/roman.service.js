import { Solution } from "../models/solution.js";

function romanConverter(roman) {
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

function decimalConverter(decimal) {
  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  let result = '';
  for (const [roman, value] of romanNumerals) {
    while (decimal >= value) {
      result += roman;
      decimal -= value;
    }
  }
  return result;
}
  
async function convert(question) {
  const answer = typeof question == 'string'? romanConverter(question): decimalConverter(question);
  const solution = new Solution({question: question, answer})
  await solution.save();
  return solution;
}

async function getAllSolutions() {
  return await Solution.find({});
}

async function getSolutionById(id) {
  return await Solution.findById(id);
}

async function updateSolution(id, question) {
  const answer = typeof question == 'string'? romanConverter(question): 'from decimal to roman is not implemented yet';
  const solution = Solution.findByIdAndUpdate(id, {question, answer});
  return solution;
}

async function deleteSolution(id) {
  return Solution.findByIdAndDelete(id);
}

export { convert, getAllSolutions, getSolutionById, updateSolution, deleteSolution };
  