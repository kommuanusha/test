// function buildList() {
//   var result = [];
//   for (var i = 0; i < 3; i++) {
//     (()=>{
//       var item = 'item' + i;
//       result.push( function() {console.log(item + ' ' + i)} );
//     })()
//   }
//   return result;
// }

// function testList() {
//   var fnlist = buildList();
//   // // using j only to help prevent confusion - could use i
//   // for (var j = 0; j < fnlist.length; j++) {
//   //     fnlist[j]();
//   // }
// }

// testList()

// let A = [1,2,3,4];
// A = A.map(k => k+1)
// // Promise((resolve, reject)=>{})
// console.log(A)

(async () => {
  var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
  });
  
  var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
  });
  
  var promise1 = Promise.resolve(3);
  var promise2 = 42;
  var promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
  });
  
  const result = await Promise.all([promise1, promise2, promise3])
  console.log(result)
  // expected output: Array [3, 42, "foo"]
  
})()
