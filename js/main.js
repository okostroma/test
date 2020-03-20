let request = document.querySelector(".request");
let search = document.querySelector(".search");

let arr = [ 'man', { name: 'John', age: 23 }, 'woman', { name: 'Liza', age: 25 }, 'boy', { name: 'Karl', age: 15 } ];

/* tasks 3,4,5,10 */
search.addEventListener("click", function() {
    

    if (request.value == 'google') {
        let myRequest = setTimeout(function() {
    alert('Yandex круче,но это не точно' + " " + arr[1].name)}, 3000)
} else {
    let myRequest = setTimeout(function() {
        alert(request.value + " " + arr[1].name)}, 3000)
  }
  
  
});



/* task 6 */


function superSum(a,b) {

    return(parseFloat(a)+parseFloat(b));
}

/* task 7 */


for (let newArr = [1,4,21335,345,354,23,567,878];

    console.log(Math.min.apply(null, newArr));


);

for (let newArr = [1,4,21335,345,354,23,567,878];
    console.log(Math.max.apply(null, newArr));
);

// как я поняла, можно еще и так

myArray = [454,767,342,445,64,435,67];
min = myArray[0];
max = min;
for (i = 1; i < myArray.length; ++i) {
    if (myArray[i] > max) max = myArray[i];
    if (myArray[i] < min) min = myArray[i];
}

console.log(min);
console.log(max);

/* task 8 */


let a = 253;
let b = 'hello';

console.log(a);
console.log(b);

b = [a, a = b] [0];
console.log(a);
console.log(b);


/* task 9 */


let arrNew = [];
function findMax(arrNew) {
    return Math.max(...arrNew);
}

// еще варик
// function findMax(numArray) {
//     return Math.max.apply(null, numArray);
// }


