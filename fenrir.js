const isValid = (s) => {
  let stack = [];
  // 対応マップ
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    // 開き括弧なら配列に追加
    if (Object.keys(map).includes(s[i])) {
      stack.push(s[i]);
    }
    // 閉じ括弧なら、対応する開き括弧をチェック
    else if (Object.values(map).includes(s[i])) {
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
