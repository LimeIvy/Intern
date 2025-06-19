const isValid = (s) => {
  let stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(map).includes(s[i])) {
      stack.push(s[i]);
    } else if (Object.values(map).includes(s[i])) {
      if (stack.length === 0 || map[stack.pop()] !== s[i]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
let s = '()';
console.log(isValid(s)); // true
s = '({)}'
console.log(isValid(s)); // false
