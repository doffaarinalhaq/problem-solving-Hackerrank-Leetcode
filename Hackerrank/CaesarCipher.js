function caesarCipher(s, k) {
  // Write your code here
  const a = "abcdefghijklmnopqrstuvwxyz";
  if (k >= 26) {
    k %= 26;
  }
  const rotated_a = a.slice(k).concat(a.slice(0, k));
  let encrypedStr = "";
  for (let i of s) {
    if (i.match(/[A-Z]/)) {
      encrypedStr += rotated_a[a.indexOf(i.toLowerCase())].toUpperCase();
    } else if (i.match(/[a-z]/)) {
      encrypedStr += rotated_a[a.indexOf(i)];
    } else {
      encrypedStr += i;
    }
  }
  return encrypedStr;
}
