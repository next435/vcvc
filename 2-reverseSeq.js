const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

console.log(reverseSeq(5));
