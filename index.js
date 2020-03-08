// const number = [1, -1, 3, 4, 10]
// let sum = 0;
// number.forEach(element => {
//     sum = element + sum;
// });
// console.log(sum);
// const summ = number.reduce((accumulator, currentValue) =>
//     accumulator + currentValue, 0);
// const summ = number.reduce((a, b) => a + b)
//     // console.log(summ);


// const numbers = arrayFromRange(10, 30);
// console.log(numbers);

// function arrayFromRange(min, max) {
//     const arr = [];
//     for (let i = min; i <= max; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// const maxx = [1, 3, 5, 4, 3, 22, 3, 2, 3, 33, 2]
// const max = getMax(maxx);
// console.log("I'm Max ", max)

// function getMax(arrayNumber) {
//     return arrayNumber.reduce((accu, curr) => {
//         if (curr > accu) {
//             return curr;
//         }
//         return accu;
//     });
// }



// let max = arrayNumber[0]
//     for (let i = 0; i < arrayNumber.length; i++) {
//         if (arrayNumber[i] > max) {
//             max = arrayNumber[i];
//         }
//     }
//     return max


// let num = 0;
// for (let iterator of arrayNumber) {
//     if (num <= iterator) {
//         num = iterator;
//     }
// }
// return num;





// const numberss = [1, 1, 2, 3, 4, 5, 6, 6, 6, 7];

// const OutPut = countOccurrences(numberss, 6);
// console.log(OutPut);

// function countOccurrences(numberss, searchElement) {

//     return numberss.reduce(function(accumulator, currentValue) {
//         console.log(currentValue, searchElement)
//         const occur = (currentValue !== searchElement)

//         return occur + accumulator;
//     }, 0)

//     // let count = 0;
//     // for (const num of arrays) {
//     //     if (num === searchElement) {
//     //         count++
//     //     }
//     // }
//     // return count;
// }





// const output = move(numbers, 1, 2);
// console.log(output);

// function move(arrays, index, offset) {
//     const position = index + offset;
//     if (position >= arrays.length) {
//         return "Invalid Offset  .. !!!";
//     } else {
//         const myArr = [...arrays]
//         const element = myArr.splice(index, 1)[0];
//         console.log(position, element)
//         myArr.splice(position, 0, element);
//         return myArr
//     }

// }



// const output = except(numbers, [1, 2, 3, 4]);
// console.log(output);

// function except(arrays, except) {
//     // console.log(arrays, except);
//     insideArray = []
//     for (let find of arrays) {
//         if (!except.includes(find))
//             insideArray.push(find);
//     }
//     return insideArray
// }






// const exist = includes(numbers, 5);
// console.log(exist);

// function includes(array, serach) {
//     // let find = false;
//     // array.forEach(element => {
//     //     if (serach === element)
//     //         return true
//     //     return false;
//     // });

//     // for (let element of array) {
//     //     if (element === serach)
//     //         return true;
//     // }
//     // return false;

//     for (let element of array)
//         if (element === serach)
//             return true
//     return false;
// }


const movies = [
    { title: 'King Fo', year: 2019, rating: 2.5 },
    { title: 'Die Hard', year: 2019, rating: 3.5 },
    { title: 'Fast & Furious', year: 2019, rating: 4 },
    { title: 'Glorious Journey', year: 2020, rating: 4.5 }
];

// const movie = sortMovies(movies, 3, 'asc')
// movie.forEach(element => {
//     console.log(`${element.title} has ${element.rating} Starrs`)
// });


// function sortMovies(moviesArray, rating, order) {
//     const arr = [];
//     for (let i = 0; i < moviesArray.length; i++) {
//         if (moviesArray[i].year === 2019 && moviesArray[i].rating >= rating) {
//             arr.push(moviesArray[i])
//         }
//     }
//     return arr.sort((a, b) => b.rating - a.rating);
// }

const ddd = movies.filter(m => m.year === 2019 && m.rating >= 3)
    .sort((a, b) => b.rating - a.rating).map((m => m.title));
console.log(ddd)