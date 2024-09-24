// Remove duplicate words
function removeDuplicateWords(s) {
  let result = s.split(' ')
  return [...new Set(result)].join(' ')
}

let x = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
/* let z = x.split(" ")
let v = [...new Set(z)]
let a = []
v.forEach((el) => a.push(el))
console.log(a.join(" "));
console.log(v.join(" ")); */
console.log(removeDuplicateWords(x));

