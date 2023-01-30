obj = {}
obj.name = "John"
obj.surname = "Smith"
obj.name = "Pete"

delete obj.name


function multiplyNums(obj) {
  for (let x in obj) {
    if (typeof obj[x] === 'number') {
      obj[x] *= 2;
    }
  }
  return obj;
}




