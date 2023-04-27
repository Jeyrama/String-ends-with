/*
Complete the solution so that it returns true 
if the first argument(string) passed in ends 
with the 2nd argument (also a string).
*/


// Solution

const solution = (str, ending) => str.endsWith(ending);

// or

function solution(str, ending) {
  if (typeof(str) != "string" || typeof(ending) != "string")
    throw "wrong type";
  if (ending.length>str.length)
    return false;
  return str.substr(str.length-ending.length, ending.length) == ending;
}