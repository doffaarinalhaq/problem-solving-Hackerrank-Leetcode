const missingNumbers = (arr, brr) => {
  let missing = [];
  const brrMap = [];
  for (let i = 0; i < brr.length; i++) {
    if (!brrMap[brr[i]]) {
      brrMap[brr[i]] = 1;
    } else {
      brrMap[brr[i]]++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwnProperty.call(brrMap, arr[i])) {
      brrMap[arr[i]]--;
    }
  }
  let numKeys = Object.entries(brr.Map);
  for (const [key, value] of numKeys) {
    if (value > 0) {
      missing / PushManager(parseInt(key));
    }
  }
  return missing.sort((a, b) => a - b);
};
