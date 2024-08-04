// Tes Logika dan Algoritma - Azka Fitria

// No. 1
// assumptions:
// - count alphabet character frequency only
// - insensitive case
const alphabet = {
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  a: 97,
  b: 98,
  c: 99,
  d: 100,
  e: 101,
  f: 102,
  g: 103,
  h: 104,
  i: 105,
  j: 106,
  k: 107,
  l: 108,
  m: 109,
  n: 110,
  o: 111,
  p: 112,
  q: 113,
  r: 114,
  s: 115,
  t: 116,
  u: 117,
  v: 118,
  w: 119,
  x: 120,
  y: 121,
  z: 122,
};

const numToAlphabet = (n) => {
  for (const char in alphabet) {
    if (n === alphabet[char]) {
      return char;
    }
  }
  return "";
};

const countAlphabetFreq = (str) => {
  const dictionary = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (alphabet[char]) {
      if (alphabet[char] >= 65 && alphabet[char] <= 90) {
        char = numToAlphabet(alphabet[char] + 32);
      }
      dictionary[char] += 1;
    }
  }

  return dictionary;
};

// No. 2a
const numberSeriesA = (n) => {
  let series = "";

  for (let i = 0; i < n; i++) {
    series += `${i * i} `;
  }

  return series;
};

// No. 2b
const numberSeriesB = (n) => {
  let series = "";
  let term = 1;
  let addition = 1;

  for (let i = 0; i < n; i++) {
    series += `${term} `;
    term += addition;
    addition += 2;
  }

  return series;
};

// No. 2c
const numberSeriesC = (n) => {
  let series = "";
  let prevTerm = 1;
  let prevPrevTerm = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      series += `${prevPrevTerm} `;
    } else if (i === 1) {
      series += `${prevTerm} `;
    } else {
      const currTerm = prevPrevTerm + prevTerm;
      series += `${currTerm} `;
      prevPrevTerm = prevTerm;
      prevTerm = currTerm;
    }
  }

  return series;
};

// No. 2d
const numberSeriesD = (n) => {
  let series = "";
  let addition = 1;
  let prevAddition = 0;
  let term = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      series += `${term} `;
    } else if (i === 1) {
      series += `${term + prevAddition} `;
    } else if (i === 2) {
      series += `${term + addition + prevAddition} `;
      term += addition + prevAddition;
    } else {
      const currAddition = addition + prevAddition;
      term += currAddition;
      series += `${term} `;
      prevAddition = addition;
      addition = currAddition;
    }
  }

  return series;
};
