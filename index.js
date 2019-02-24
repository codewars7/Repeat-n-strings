const repeatStringNumTimes = (str, num) => {
  let result = "";
  for (let i = num; num > 0; num--) {
      num > 0 ? result += str : ""
  }
  console.log(result)
  return result;
}

repeatStringNumTimes("abc", 3);
