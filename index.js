// 'use strict'


// if(!Object.is || true) {
//   Object.is = function ObjectIs(x, y) {
//      let xNegZero = isNegZero(x)
//      let yNegZero = isNegZero(y)
     
//      if(xNegZero || yNegZero) {
//       return xNegZero && yNegZero
//      }
//       else if(isItNaN(x) && isItNaN(y)) {
//         return true

//       }
//       else {
//         return x === y
//       }

//      function isNegZero(v) {
//        return v === 0 && 1/v === -Infinity
//      }

//      function isItNaN(v) {
//        return v !== v
//      }
    
//   }
// }

// // tests:
// console.log(Object.is(42,42) === true);
// console.log(Object.is("foo","foo") === true);
// console.log(Object.is(false,false) === true);
// console.log(Object.is(null,null) === true);
// console.log(Object.is(undefined,undefined) === true);
// console.log(Object.is(NaN,NaN) === true);
// console.log(Object.is(-0,-0) === true);
// console.log(Object.is(0,0) === true);

// console.log(Object.is(-0,0) === false);
// console.log(Object.is(0,-0) === false);
// console.log(Object.is(0,NaN) === false);
// console.log(Object.is(NaN,0) === false);
// console.log(Object.is(42,"42") === false);
// console.log(Object.is("42",42) === false);
// console.log(Object.is("foo","bar") === false);
// console.log(Object.is(false,true) === false);
// console.log(Object.is(null,undefined) === false);
// console.log(Object.is(undefined,null) === false);


// const sortedArray1 = [1, 3, 5,4,2];

// let counter = 0

// const sumFunction = (i) => {
//   if (sortedArr[i] %2 === 0) {
// 		counter += 1} 
// 		else if(sortedArr[i] === 5) {
// 		counter +=5}
// 		else if(sortedArr[i] %2 !== 0 && i!=5) {
// 		counter+= 3}
// }

// sortedArr.forEach(sumFunction(i))

// // function find_total( sortedArr ) {
// // 	sortedArr.forEach(function counter(i){
// // 		 	if (sortedArr[i] %2 === 0) {
// // 		counter += 1} 
// // 		else if(sortedArr[i] === 5) {
// // 		counter +=5}
// // 		else if(sortedArr[i] %2 !== 0 && i!=5) {
// // 		counter+= 3}
// // 	})
// //   return counter
// // }
// // console.log(find_total(sortedArray1))


// // expected output: "a"
// // expected output: "b"
// // expected output: "c"



// // expected output: "a"
// // expected output: "b"
// // expected output: "c"


// const sortedArr = [1, 3, 5,4,2];

// let counter = 0

// const sumFunction = (i) => {


// sortedArr.forEach((i) => function(i) {
//   if (i %2 === 0) {
// 		counter += 1} 
// 		else if(i === 5) {
// 		counter +=5}
// 		else if(i %2 !== 0 && i!=5) {
// 		counter+= 3}
// })

// console.log(counter)

// const text = 'jaximosd'
// const newsortedArr = []
// const splittedText = text.split('')

// for(i=0; i< text.length; i+=2) {
//   newsortedArr.push(splittedText[i] + splittedText[i+1] + '')
// }
// console.log(newsortedArr);
// let re = /[a-zA-Z]/
// function rot13(message){
//   const capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//   const small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   const msg = [...message]
//   let sortedArr = []
//   msg.forEach(el => {
//     if(capital.includes(el)) {
//       const index = capital.indexOf(el)
//       const newIndex = index + 13
//       const latestIndex = 0
//       if(newIndex > 26) {
//        latestIndex =  newIndex -26
//        sortedArr.push(capital[latestIndex])
//       } else
//       sortedArr.push(capital[index+13])
//     } else if(small.includes(el)) {
//       const index = small.indexOf(el)
//       const newIndex = index + 13
//       if(newIndex > 26) {
//         latestIndex = newIndex - 26
//         sortedArr.push(small[latestIndex])
//        } else
//       sortedArr.push(small[index+13]) 
//     } else {
//       sortedArr.push(el)
//     }
//     return sortedArr
//   })


// }
// rot13('sssd')
// splittedText.forEach((element, index) => {
//   if(index%2 == 0) {
//     console.log(index);
//   newsortedArr.push(element)
//   } else if(index%2 !=0) {
//     console.log(index);

//     newsortedArr.push(element+' ')
//   }
  
//   })  
//   console.log(splittedText);

//   console.log('newsortedArr',newsortedArr);
//   const joinedText = splittedText.join(', ')
//   console.log('joinedText',joinedText);

// function plusMinus(sortedArr) {
//   let positive = 0
//   let negative = 0
//   let zeros = 0
//   const length = sortedArr.length
//   sortedArr.forEach(function(el) {
//       if(el > 0 ) {
//           positive++
//       } else if(el == 0) {
//           zeros++
//       } else if( el < 0) {
//           negative++
//       }
//   })
//   const positiveRatio = (positive / length).toFixed(6)
//   const negativeRatio = (negative / length).toFixed(6)
//   const zerosRatio = (zeros / length).toFixed(6)
//   const res = [positiveRatio, negativeRatio, zerosRatio]
  
//   return res.forEach(el => console.log(el)) 

// }
// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))

// sortedArr = [1,4,3,2,9]

// function miniMaxSum(sortedArr) {
//   const sorted = sortedArr.sort()
//   const smallest = sortedArr[0]
//   const largest = sortedArr[4]
//   const reducer = (prevValue, currentValue) => prevValue + currentValue
//   const smallestSum = sorted.slice(-1).reduce(reducer)
//   const largestSum = sorted.slice(1).reduce(reducer)
//   return console.log(smallestSum + "  " + largestSum);
  

// }

// console.log(miniMaxSum(sortedArr))

// function timeConversion(s) {
//   const am = s.slice(0, 8)
//   let splitted = am.split(':')
//   const convert =  Number(splitted[0]) + 12
// if(s.includes('AM')) {
//     if(s[0] == 1 && s[1] == [2]) {
//         const convert = Number(splitted[0]) - 12
//         splitted[0] = convert.toString().padStart(2, '0')
//         const sortedArr = splitted.join(':')
//         return sortedArr
//     } else {
//     return  s.slice(0, 8)
//     }
// } else {
//     if(s[0] == 1 && s[1] == [2]) {
//     return  s.slice(0, 8)
//     } else {
        
//     const pm = s.slice(0, 8)
//     let splitted = pm.split(':')
//    const convert =  Number(splitted[0]) + 12
//    splitted[0] = convert.toString()
//    const sortedArr = splitted.join(':')     
//    return  sortedArr;
// } 
//     }   

// }
// console.log(timeConversion('12:40:22AM'))
// console.log(timeConversion('07:05:45PM'))
// a = [1,1,2,2,3,3,9,9,3]
// function median(sortedArr) {
//   const sorted = sortedArr.sort()
//   console.log(sorted);
//   const medianIndex = Math.floor(sortedArr.length / 2)
//   return sorted[medianIndex]
// }
// function lonelyinteger(a) {
//   const counts = {}
//   a.forEach((el) => {
//       counts[el] = (counts[el] || 0) + 1
//   })
//   let value = Object.keys(counts).find(el => counts[el] == 1)
//   return value
//   // console.log(value);
//   // console.log(counts);

// }
// console.log(lonelyinteger(a));
// console.log(median(sortedArr));

// b=[[11,2,4],
//    [4,5,6],
//    [10,8,-12]]

// function diagonalDifference(sortedArr) {
//     let firstDiag = 0
//     let secondDiag = 0
// for(let i = 0; i < sortedArr.length; i++) {
//     firstDiag+= sortedArr[i][i]
//     secondDiag+= sortedArr[i][sortedArr.length- 1 - i]
//     console.log( firstDiag);
//     console.log( secondDiag);
// }
// const diff = firstDiag - secondDiag
//   return Math.abs(diff)

// }

// console.log(diagonalDifference(b))

// function diagonalDifference(sortedArr) {
//   let diff = 0;
//   const length = sortedArr.length - 1;
//   for (let i = 0; i < sortedArr.length; i++) {
//     diff += sortedArr[i][i] - sortedArr[i][length - i];
//   }
//   return Math.abs(diff);
// }
  // console.log(diagonalDifference(b))
//   var k = 3
//   var s = 'middle-Outz'
//   let test ='1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M'

// function caesarCipher(s, k) {
//    const capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//   const small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//     // const reg = /[a-zA-Z]/
//     const splitted = [...s]
//     const sortedArr = []
//     splitted.forEach(function(el) {
//       if(small.includes(el)) {
//         let index = small.indexOf(el)
//         const shifted = index + k
//         if(shifted > small.length - 1) {
//           let newIndex = shifted - 26
//           sortedArr.push(small[newIndex%26])
//         } else {
//           let newIndex = small.indexOf(el) + k
//           sortedArr.push(small[newIndex])
//         }
//       } else if (capital.includes(el)) {
//         let index = capital.indexOf(el)
//         const shifted = index + k
//         if(shifted > capital.length - 1) {
//           let newIndex = shifted - 26
//           sortedArr.push(capital[newIndex%26])
//         } else {
//           let newIndex = capital.indexOf(el) + k
//           sortedArr.push(capital[newIndex%26])
//         }
//     } else {
//       sortedArr.push(el)
//     }
//   })
//   const res = sortedArr.join('')
//   return res
// }
// console.log(caesarCipher(test,27));

// grid = ['uxf',
//         'vof',
//         'hmp']
// let n = 3

//         function gridChallenge(grid) {
//           const n = grid.length
//           const newCol = []
//           const newRow = []
//           if(grid.length == 1) {
//             return 'YES'
//           }
//           grid.forEach(function(sortedArr) {
//          const sorted = sortedArr.split('').sort(function compare(a, b) {
//           if (a < b) {
//             return -1;
//           }
//           if (a > b) {
//             return 1;
//           }
//           return 0;
//         }).join('');
//             newCol.push(sorted[0]);
//             newRow.push(sorted)
//           })
//           console.log(newCol.join(''));
//           console.log('sorted',newRow);
//           const compare = []
//           for(let i = 0; i < n; i ++) {
//             compare[i] = []
//           }
//           console.log(compare);
//           newRow.forEach(function(el) {
//             for(let i = 0; i < n; i ++) {
//               compare[i].push(el[i]);
              
//             }
//           })
//           const compare2 = []
//           for (let i = 0; i < compare.length; i++) {

//             compare2[i] = compare[i].slice();
//           }
//           compare2.forEach(function(el) {
//             el.sort()
//           })
//           if(sortedArray.prototype.equals)
//           console.warn("Overriding existing sortedArray.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
//       // attach the .equals method to sortedArray's prototype to call it on any sortedArray
//       sortedArray.prototype.equals = function (sortedArray) {
//           // if the other sortedArray is a falsy value, return
//           if (!sortedArray)
//               return false;
      
//           // compare lengths - can save a lot of time 
//           if (this.length != sortedArray.length)
//               return false;
      
//           for (var i = 0, l=this.length; i < l; i++) {
//               // Check if we have nested sortedArrays
//               if (this[i] instanceof sortedArray && sortedArray[i] instanceof sortedArray) {
//                   // recurse into the nested sortedArrays
//                   if (!this[i].equals(sortedArray[i]))
//                       return false;       
//               }           
//               else if (this[i] != sortedArray[i]) { 
//                   // Warning - two different object instances will never be equal: {x:20} != {x:20}
//                   return false;   
//               }           
//           }       
//           return true;
//       }
//       // Hide method from for-in loops
//       Object.defineProperty(sortedArray.prototype, "equals", {enumerable: false});
//          if(compare.equals(compare2)) {
//            return 'YES'
//          } else return 'NO'
        
//         }

// console.log(gridChallenge(grid))


// function fibonacci(num) {
//   if(num < 2) {
//     return num
//   }
//   return fibonacci(num -1) + fibonacci(num -2)
// }

// function fibonacci(num) {
//   const sortedArr = [0,1]
//   for(let i = 2; i <= num; i++) {
//     const prev = sortedArr[i-1]
//     const curr = sortedArr[i-2]
//     sortedArr.push(prev + curr)
//   }
//   return sortedArr
//   // console.log(sortedArr);
// }

// console.log(fibonacci(50000000));

// function fizzbuzz(n) {
//   for(i = 1; i <= n; i ++) {
//     if(i%5 == 0 && i%3 == 0) {
//       console.log('FizzBuzz');
//     }
//     else if(i%3 == 0) {
//       console.log('Fizz');
//     } else if(i%5 == 0) {
//       console.log('Buzz');
//     }  else 
//     console.log(i);
//   }
// }

// console.log((fizzbuzz(100)))

// const q = [2, 1, 5, 3, 4,]


// function minimumBribes(q) {
//     const n = q.length
//     let chaos = false
//     let count = 0
      
   
//     for(let i = 0; i < q.length; i++) {
//       if(q[i] - (i + 1 ) > 2) {
//         console.log(q[i], q[i-1]);
//         return console.log('Too chaotic');
//       } 
//       for(let j= q[i] - 2; j < i; j++) {
//         if(q[j] > q[i]) {

//           count++
//         }
//       }
//     }
//     if(chaos) {
//      return console.log('Too chaotic')
//     } else {
//       return count
//     }
//   }
// function minimumBribes(q) {
//     const n = q.length
//     const index1 = {}
//     q.forEach(function(el) {
//       index1[el] = q.indexOf(el)
//     })
//     console.log('index',index1);
//     const q2 = [...q]
//     q2.sort((a,b) => a - b)
//     const index2 = {}
//     q2.forEach(function(el) {
//       index2[el] = q2.indexOf(el)
//     })
//     const compare = []
//     for(let i = 1; i <= n; i++ ) {
//       compare.push(index1[i] - index2[i])
//     }
//     let count = 0
//     compare.forEach(function(el) {
//       if(el >= 1) {
//         count++
//       }
//     })
//     console.log(compare);
//     let chaos = false
//     if(compare.find(el => el >= 3)) {
//       chaos = true
//     }
//     // console.log(chaos);
//     // console.log(count);
//     console.log('sorted Index', index2);
//     // console.log(compare);

//     if(chaos) {
//      return console.log('Too chaotic')
//     } else {
//       return count
//     }
//   }

// console.log(minimumBribes(q))
// const a = [5,7,6]
// const b = [3,6,10]
// function compareTriplets(a, b) {
//   const n = a.length
//   let alex = 0
//   let bob = 0
//   for(let i =0; i < n; i++) {
//     a[i] == b[i] ? null : a[i] > b[i] ? alex++ : bob++ 
//    }
//    return [alex,bob].join(' ')
//    }

// console.log(compareTriplets(a,b))
// var workshop = {
//   teacher: "kyle",
//   ask : function(question) {  console.log(this.teacher, question)},
//   answer: function() {
//     console.log(this);
//   },
//   fn() { setTimeout(() => console.log(this.teacher), 20) }
// }



// setTimeout(workshop.ask,10,"lost this?")
// setTimeout(workshop.ask.bind(workshop),10,"lost this?")
// workshop.ask('hahah')
// workshop.answer()
// workshop.fn()

// let n = 9875
// Super Digit First Shitty Solution
// function superDigit(n, k) {
//   let p = ''
//   for(let i = 0; i < k; i++) {
//       p += n.toString()
//   }
//   let collect = p.toString().split('')
//   let sum = 0
//   splitter()
//   function splitter() {
//     collect.forEach((element, index) => {
//       collect[index] = Number(element)
//     });
//     const reducer = (preValue, currentValue) => preValue + currentValue
//     const reduced = collect.reduce(reducer)
//     sum = reduced
//     collect = sum.toString().split('')
//   }
//     while(collect.length > 1 ) {
//     splitter()
//   }
//   return sum
// }

// console.log(superDigit(n,4))
// ---------------------------------------------------------------------------------------------------
// SuperDigit Better Solution

// function superDigit(n, k) {
//   n = n.split('').reduce((a,b) => +a + +b ) * k + ""
//   return n.length > 1 ? superDigit(n, 1) : n[0] 
// }
//-----------------------------------------------------------------------------------------------------
// Longest String in an sortedArray

// function longestString(string) {
//   let maxLength = { length: 0, index: null}
//   string.forEach(function(el, index) {
//       if(el.length > maxLength.length) {
//           maxLength.length = el.length
//           maxLength.index = string.indexOf(el)
//       }
//   })
//   return string[maxLength.index]
// }

// console.log(longestString(['asdf','aaaaaaaaaaaaa']));
//--------------------------------------------------------------------------------------------------
// MOST COMMON STRING

// function mostCommonString(string) {
//   const splitted = string.split('')
//   const temp = {}
//   splitted.forEach((el) => {
//       temp[el] = (temp[el] || 0) + 1
//   })
//   const values = Object.values(temp)
//   const max = Math.max(...values)
//   // console.log(temp);
//   // console.log(values, max);
//   return Object.keys(temp).find(key => temp[key] == max)
// }

// console.log(mostCommonString('aaaaaaadnamme'));
//---------------------------------------------------------------------------------------------------
// IS ANAGRAM 

// function isAnagram(str1, str2) {
//   if(str1 == str2) {
//     return true
//   }
//   const ang1 = str1.split('').sort().join()
//   const ang2 = str2.split('').sort().join()
//   return ang1 == ang2
// }

//-----------------------------------------------------------------------------------------------------

// IS PALINDROME

// function palindrome(str) {
//   const str2 = str.trim().split('').reverse().join('')
//   return str == str2
// }
//------------------------------------------------------------------------------------------------------

// BALANCED BRACKETS

// const balancedbrackets = (str) => {
//   const stack = [];
//   let openers = ["{", "[", "("];
//   let closers = ["}", "]", ")"];
  
//   const dict = {
//     "{" : "}",
//     "[" : "]",
//     "(" : ")"
//   }

//   for(let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if(openers.includes(char)) {
//             stack.push(char);
//         }
//         else if(closers.includes(char)) {
//             //is our stack empty? 

//             if(!stack.length) {
//                 return false;
//             }
//             //does our popped element not match the corresponding element?
//             else if(dict[stack.pop()] !== char) {
//                 return false;
//             }
//         }
//     }
    
//     return stack.length === 0;

// }

//----------------------------------------------------------------------------------------------------

// ARMSTRONGNUMBER 

// function armstrongNumber(num) {
//   const power3 = num.toString().split('')
//   const digits = Math.floor(Math.log10(Math.abs(num))) + 1
//   power3.forEach(function(el, index){
//     power3[index] = Math.pow(el, digits)
//   })
//  const res =  power3.reduce((a,b) => a + b)
//   return num == res
// }

// console.log(armstrongNumber(153))

//----------------------------------------------------------------------------------------------------

// const sortNumbers = (sortedArr) => {
//   return sortedArr.sort();
// }

// console.log(sortNumbers([1, 11, 27, 2, 34, 123]));

//----------------------------------------------------------------------------------------------------

// LINKED LIST

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     }
//     this.tail = this.head
//     this.length = 1
//   }
//   append(value) {
//     const node = new Node(value)
//     if(this.length == 1) {
//       this.head.next = node
//     }
//     this.tail.next = node
//     this.tail = node
//     this.length++
//     return this
//   }
//   prepend(value) {
//     const node = new Node(value)
//     node.next = this.head
//     this.head = node
//     this.length++
//     return this
//   }
//   insert(index, value) {
//     if(index >= this.length) {
//       return this.append(value)
//     }
//     const node = new Node(value)
//     const prevNode = this.traverse(index - 1)
//     const nextNode = prevNode.next
//     prevNode.next = node
//     node.next = nextNode
//     return this
//   }
//   traverse(index) {
//     if(index == 0) {
//       return this.head
//     }
//     let targetIndex = 0
//     let currentNode = this.head
//     while(targetIndex != index) {
//       currentNode = currentNode.next
//       targetIndex++
//     }
//     return currentNode
//   }
//   printList() {
//      const sortedArr = []
//      let currentNode = this.head
//      while(currentNode) {
//         sortedArr.push(currentNode.value)
//         currentNode = currentNode.next
//      }
//      return sortedArr
//   }
//   remove(index) {
//     if(index == 0 ) {
//       const newHead = this.head.next
//       this.head = newHead
//       return this.printList()

//     }
//     const prevNode = this.traverse(index - 1)
//     let targetNode = prevNode.next
//     prevNode.next = targetNode.next
//     targetNode = null
//     this.length--
//     return this.printList()
//   }
//   reverse() {
//     let first = this.head
//     let second = first.next
//     while(second) {
//       const temp = second.next
//       // first.next = temp
//       second.next = first
//       first = second
//       second =temp
//     }
//     this.head.next = null
//     this.head = this.tail
//     return this.printList()
//   }
// }

// const myLinkedList = new LinkedList(10)
// myLinkedList.append(8)
// myLinkedList.append(4)
// myLinkedList.prepend(99)
// console.log(myLinkedList.traverse(2))
// console.log(myLinkedList.insert(2, 100))
// // console.log(myLinkedList.remove(2));
// console.log(myLinkedList.printList())
// myLinkedList.reverse()
// console.log(myLinkedList.printList())

//----------------------------------------------------------------------------------------------------

// MAX SUM SUB sortedArrAY
// const sortedArr = [-2, -3, 4, -1, -2, 1, 5, -3]
// function maxSubsortedArray(sortedArr) {
//   const newsortedArr = []
//   for(let i = 0; i < sortedArr.length; i++) {
//     for(let j= 1; j < sortedArr.length; j++) {

//     }
//   }
// }

//---------------------------------------------------------------------------------------------------

// Balanced Brackets 
// function isBalanced(s) {
//   const openers = ['(', '[', '{']
//   const closers = [')', ']', '}']
//   const dict = {
//     '(': ')',
//     '{': '}',
//     '[': ']'
//   }
  
//   let stack = []
  
//   for( let i = 0; i < s.length; i++) {
//     let char = s[i]
//     if(openers.includes(char)) {
//       stack.push(char)
//     } else {
//       if(dict[stack.pop()] != char) {
//         return 'NO'
//       }
//     }
//   }
//   return stack.length == 0 ? 'YES' : 'NO'
// }

// const s = '{[(dd]])}'

// console.log(isBalanced(s));

//---------------------------------------------------------------------------------------------------

// STACKS USING LINKEDLIST

//  class Node {
//    constructor(value) {
//      this.value = value
//      this.next = null
//    }
//  }

//  class Stack {
//    constructor() {
//     this.top = null
//     this.bottom = null
//     this.length = 0
//    }
//    peek() {
//      return this.top
//    }
//    push(value) {
//      const newNode = new Node(value)
//      if(this.length == 0) {
//        this.top = newNode
//        this.bottom = newNode
//        this.length++ 
//        return this
//      }
//      newNode.next = this.top
//      this.top = newNode
//      this.length++
//      return this
//    }
//    pop() {
//      if(this.length == 0) {
//        return null
//      }
//      if(this.top == this.bottom) {
//        this.bottom = null
//        this.top = null
//        this.length--
//        return this
       
//      }
//      const newTop = this.top.next
//      this.top = newTop
//      this.length--
//      return this
//    }
//  }

//  const myStack = new Stack

//  console.log(myStack.push(2));
//  console.log(myStack.push(3));
//  console.log(myStack.push(4));
//  console.log(myStack.pop());
//  console.log(myStack.pop());
//  console.log(myStack.pop());

//-----------------------------------------------------------------------------------------------------

// STACK USING sortedArrAY

//  class Node {
//    constructor(value) {
//      this.value = value
//      this.next = null
//    }
//  }

//  class Stack {
//    constructor() {
//     this.stack = []
    
//    }
//    peek() {
//      return this.stack[this.stack.length - 1]
//    }
//    push(value) {
//     this.stack.push(value)
//      return this
//    }
//    pop() {
//     this.stack.pop()
//     return this
//  }
//  }

//  const myStack = new Stack

//--------------------------------------------------------------------------------------------------

// QUEUES USING LINKEDLIST

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class Queue {
//   constructor(){
//     this.first = null
//     this.last = null
//     this.length = 0
//   }
//   peek() {
//     return this.first
//   }
//   enqueue(value) {
//     const newNode = new Node(value)
//     if(this.length == 0) {
//       this.first = newNode
//       this.last = newNode
//     } else {
//       this.last.next = newNode
//       this.last = newNode
//     }
//     this.length++
//     return this
//   }
//   dequeue() {
//     if(this.length == 0) {
//       return null
//     }
//     if(this.first == this.last) {
//       this.last = null
//     }
//     this.first = this.first.next
//     this.length--
//     return this
//   }
// }

// const myQueue =  new Queue()

// myQueue.enqueue(1)
// myQueue.enqueue(2)
// myQueue.enqueue(3)
// myQueue.enqueue(4)
// console.log(myQueue.enqueue(5))
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// console.log(myQueue);
//--------------------------------------------------------------------------------------
// QUEUES USING STACKS

// function processData(input) {
//   class Queue {
//   constructor() {
//   this.first = []
//   this.last = []
// }
//   enqueue(value) {
//     this.first.push(value)
//   }

//   dequeue() {
//     if(this.last.length == 0) {
//     while(this.first.length > 0) {
//       this.last.push(this.first.pop())
//     }
//     }
//     return this.last.pop()
//   }
//   peek() {
//         if(this.last.length === 0 && this.first.length === 0) {
//       return;
//     }
    
//     if(this.last.length == 0) {
//     while(this.first.length > 0) {
//       this.last.push(this.first.pop())
//     }
//     }
//     return this.last[this.last.length - 1]
//   }
// }
  
//   let queue = new Queue()
//   const data = input.split('\n')
//   const length = Number(data[0])
//   for (let i = 1; i <= length; i++) {
//     let c = data[i].split(' ')
//     if (c[0] == 1) {
//       queue.enqueue(c[1])
//     }
//     else if (c[0] == 2) {
//       queue.dequeue()
//     }
//     else if (c[0] == 3) {
//       console.log(queue.peek())
//     }
//   }
// }

//-------------------------------------------------------------------------------------------------------

// TWO SUM
// var twoSum = function(nums, target) {
//   let map = new Map()
//   for (let i =0; i < nums.length; i++) {
//       const complement = target - nums[i]
//       if(map.has(complement)) {
//           return [map.get(complement), i]
//       }
//       map.set(nums[i], i)
//   }
// };

// const nums = [2,7,11,15]
//------------------------------------------------------------------------------------------------------

// IS PALINDROME NUMBER

// var isPalindrome = function(x) {
//   if(x < 0) {
//       return false
//   }
//   const reversed = x.toString().split('').reverse().join('')
//   if (reversed == x.toString()) {
//       return true
//   }
//   else return false
// };

//-----------------------------------------------------------------------------------------------------------------------------------------------
// Roman Int 
// function romanToInt(s) {
//   const dict = {
//       'I': 1,
//       'V': 5,
//       'X': 10,
//       'L': 50,
//       'C': 100,
//       'D': 500,
//       'M': 1000
//   }
//   let num = 0
//   const input = s.split('')
//   console.log(input);
//   let i = 0
//   while(i < input.length ) {
//       if (Object.values(dict).includes(dict[input[i+1]]) && dict[input[i]] < dict[input[i+1]]) {
//           num += dict[input[i+1]] - dict[input[i]];
//           i+=2;
//       }     
//        else {
//          num += dict[input[i]];
//          i++;
//        }
//   }
//   return num
// };
// I FORGOT TO PLACE ; AFTER THE I++ SO IT CAUSED THE CODE TO MALFUNCTION. HERE I IMPLEMENTED I+=2 WHICH IS COOL
// console.log(romanToInt("MCMXCIV"));

//-----------------------------------------------------------------------------------------
// max subsortedArray

// var maxSubsortedArray = function(nums) {
//   let currVal = 0;
//   let max = -Number.MAX_VALUE;
  
//   for(let i = 0; i < nums.length; i++) {
//       currVal = Math.max(currVal + nums[i], nums[i])
//       max = Math.max(max, currVal)
//   }
  
//   return max
// };

// const nums = [-2,1,-3,4,-1,2,1,-5,4]

// console.log(maxSubsortedArray(nums))

//--------------------------------------------------------------------------------------------------

// FACTORIAL 

// function factorial(num) {
//   if(num == 2) {
//     return 2
//   }
//   return num * factorial(num - 1)
// }

// console.log(regFactorial(5));

// function regFactorial(num) {
//   let res = 1
//   // loop and decrease the number
//   for(let i = 1; i <= num ; i++) {
//     res = res * i
//   } 

//   return res
// }
//---------------------------------------------------------------------------------------------------------

// Fibonacci Recursive

// function fibo(num) {
//   let sortedArr = [0, 1]
//   for(let i = 0; i < num; i++) {
//     sortedArr.push(sortedArr[i] + sortedArr[i+1])
//   } 
//   return sortedArr[num]
// }

// console.log(fibo(8))

// function recFibo(num) {
//   if (n < 2) {
//     return n
//   }
//   return rectFibo(num - 1) + rectFibo(num - 2) 
// }

// console.log(rectFibo(5));

//---------------------------------------------------------------------------------------------------------

// Bubble Sort

// function sort(arr) {
//   // nested loop
//   // compare 2 values ++
//   //store values in new sortedArr
//   let sortedArr = [...arr]
//   for(let i = 0; i < sortedArr.length; i++) {
//     for(let j = i + 1; j < sortedArr.length; j++) {
//       if(sortedArr[i] > sortedArr[j]) {
//         let placeholder = sortedArr[i]
//         sortedArr[i] = sortedArr[j]
//         sortedArr[j] = placeholder
//       }
//     }
//   }
//   return sortedArr
// }
// function bubbleSort(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//       if(arr[j] > arr[j + 1]) {
//         let placeholder = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = placeholder
//       }
//     }
//   }
//   return arr
// }

// const arr = [2,11,3,55,33,21]

// console.log(bubbleSort(arr));

//-----------------------------------------------------------------------------------------------------

// Selection Sort

// function selectionSort(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     let min = i
//     let temp = arr[i]
//     for(let j = i + 1; j < arr.length; j++) {
//       if(arr[j] < arr[min]) {
//         min = j
//       }
//     }
//     arr[i] = arr[min] 
//     arr[min] = temp
//   }
//   return arr
// }

// const arr = [2,11,3,55,33,21]

// console.log(selectionSort(arr));
//----------------------------------------------------------------------------------------------

// var isPalindrome = function(s) {
//   const filtered = s.replace(/[^a-zA-Z0-9+]/g, "").toLowerCase()
//   return filtered == filtered.split('').reverse().join('')
  
// };
// const s = "A man, a plan, a canal: Panama"
// console.log(isPalindrome(s))
//----------------------------------------------------------------

// Longest Common Prefix

// var longestCommonPrefix = function(strs) {
//   if(strs.length == 0) {
//       return ""
//   }
//   let prefix = strs[0]
//   for(let i = 1; i < strs.length; i++) {
//       while(strs[i].indexOf(prefix) != 0) { I once made a mistake of comparing prefix != strs[i] we dont want the word to be equal
//           prefix = prefix.slice(0, prefix.length -1)
//       }
//   }
//   return prefix
// };

//-----------------------------------------------------------------

// PLUS ONE
// var plusOne = function(digits) {
//  let joined =  BigInt(digits.join(''))
//  joined++
//  const res = joined.toString().split('')
// return res
// };

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
//----------------------------------------------------------------
// function Workshop(teacher) {
//   this.teacher = teacher
// }

// Workshop.prototype.ask = function(question) {
//   console.log(this.teacher,question);
// }
// function AnotherWorkshop(teacher) {
//   Workshop.call(this,teacher)
// }
// AnotherWorkshop.prototype = Object.create(Workshop.prototype)
// AnotherWorkshop.prototype.speakUp = function(msg) {
//   this.ask(msg.toUpperCase())
// }

// var JSRecentParts = new AnotherWorkshop('Adnan')
// JSRecentParts.speakUp('hahahahaahah?')

//------------------------------------------------------------------
// var removeDuplicates = function(nums) {
//     let dict = {}
//     for(let i = 0; i < nums.length; i++) {
//         dict[nums[i]] = (dict[nums[i]] || 0) + 1
//     }
//     // console.log(dict)

//     nums.forEach((el, index) => {
//         if(dict[nums[index]] > 1 ) {
//             nums.splice(index, dict[nums[index]] - 1);
//             dict[nums[index]] = 1 ;
//         }
//     })
//         // console.log(dict)

//     // console.log(nums)
//     return nums
// };

const nums = [0,0,1,1,1,2,2,3,3,4]

// console.log(removeDuplicates(nums))

// better solution
// var removeDuplicates = function(nums) {
//   for (i = 0; i < nums.length; i++) {
//       if (nums[i] == nums[i+1]) {
//           nums.splice(i, 1);
//           i--;
//       }
//   }
// };

// Fastest solution
// var removeDuplicates = function(nums) {
//   let leftPointer = 1
//   for(let i = 1; i < nums.length; i++) {
//       if(nums[i] != nums[i - 1]) {
//       nums[leftPointer] = nums[i];
//       leftPointer++
//       }
//   }
//   console.log(nums);
//   return leftPointer
// };
// console.log(removeDuplicates(nums))
//-----------------------------------------------------------------

//Singe number
// var singleNumber = function(nums) {
//   if(nums.length == 1) {
//       return nums[0]
//   }
//   nums.sort((a,b) => a-b)
//   for(let i = 0; i < nums.length ; i++) {
//     if(nums[i] != nums[i+1] && nums[i] != nums[i-1]) {
//       return nums[i]
//     }
//   }
// };

// console.log(xor([4,1,2,1,2]));
// function xor(nums){
//   let index = 0
//   nums.forEach(function(el) {
//     index ^= el
//     console.log(index);
//   })
//   return index
// }
//=====================================================================

// contains Duplicate
// var containsDuplicate = function(nums) {
//     let hash = {}
//     for(let i = 0; i < nums.length; i++) {
//         hash[nums[i]] = (hash[nums[i]] || 0) + 1
//     }
//     return Object.values(hash).some(el => el > 1)
// };

// better solution
// var containsDuplicate = function(nums) {
// return new Set(nums).size < nums.length
// };

//----------------------------------------------------------------------------
// Square Root
// var mySqrt = function(x) {
//     if (x < 2)  return x;

//     let left = 1;
//     let right = x -1  ;

//     while(left <= right) {
//         let mid = left + Math.floor((right - left) / 2); //(right + left / 2) equivalent to this to avoid overflows
        
//         if(mid * mid == x) {
//             return mid
//         }
        
//         else if(mid > x / mid) { // mid * mid > x dont use this to avoid overflows
//             right = mid -1
//         }
//         else if(mid < x/mid) {
//             left = mid + 1
            
//         }
        
//     }
    
//     return left - 1
    
    
// };
//----------------------------------------------------------------------------

//Climb stair

// var climbStairs = function(n) {
//   if(n <= 2 ) return n
  
//   let arr = [0,1]
  
//   for(let i = 1; i <= n; i++ ) {
//       arr.push(arr[i] + arr[i - 1])
//   }
//   return arr[arr.length -1 ]
// };

//-----------------------------------------------------------------------------
// Remove Element
// var removeElement = function(nums, val) {
//   for(let i = 0; i < nums.length; i++) {
//       if(nums[i] == val) {
//           nums.splice(i, 1)
//           i--
//       }
//   }
//   return nums.length
// };

// var removeElement = function(nums, val) {
//   while(nums.indexOf(val) > -1) {
//       nums.splice(nums.indexOf(val), 1)
//   }
//       return nums.length
//   };

//--------------------------------------------------------------------------------

// ADD two binary numbers
// var addBinary = function(a, b) {
//   const a1 = BigInt('0b' + a)
//   const b1= BigInt('0b' + b)

//   const res = a1 + b1
//   return res.toString(2)
// };

//-------------------------------------------------------------------------------------
// First missing positive 
// var firstMissingPositive = function(nums) { // O(n logn)
//     if(!nums.includes(1)) {
//         return 1
//     }
//     nums.sort((a,b) => a -b)
//     for(let i = 0; i < nums.length -1 ; i++) {
//         if(nums[i] > 0 && nums[i] != nums[i + 1] && nums[i + 1] - nums[i] != 1) {
//             return nums[i] + 1
//         }
//     }
//     return nums[nums.length -1] + 1
// };

//-------------------------------------------------------------------------------------
// const ifElse = (c, isTrue, isFalse) => {
//     c ? isTrue() : isFalse()
// }
// const logTrue = () => console.log(true)
// const logFalse = () => console.log(false)
// ifElse(true, logFalse, logTrue)
//-------------------------------------------------------------------------------------

// Reduce
// function reduce(list, cb, initial) {
//   let memo = initial;
//   for(let i = 0; i < list.length; i++) {
//     if(i === 0 && !initial) {
//       memo = list[0]
//     }
//     else {

//       memo = cb(list[i], memo)
//     }
//   }
//   return memo
// }

// console.log(reduce([1,2,4], (v, sum) => v + sum));
//-------------------------------------------------------------------------------------
// generate Parenthesis
// var generateParenthesis = function(n) {
//     let stack = []
//     let res = []
    
//     function backtrack(openN, closedN) {
//         if(openN == closedN && openN == n) {
//             res.push(stack.join(''))
//             return
//         }
//         if(openN < n) {
//             stack.push('(')
//             backtrack(openN + 1, closedN)
//             stack.pop()
//         }
//         if(closedN < openN) {
//             stack.push(')')
//             backtrack(openN, closedN + 1)
//             stack.pop()
//         }
//     }
//     backtrack(0, 0)
//     return res
// };
//--------------------------------------------------------------------------------------------

// Palindrome Index
// function isPalindrome(str) {
//   return str.split('').reverse().join('') == str ? true : false
// }

// function palindromeIndex(s) {
//   for(let i = 0; i < s.length; i++) {
//     let newStr = s.slice(0,i) + s.slice(i+1)
//     if(isPalindrome(newStr)) {
//       return i
//     }
//   }
//   return - 1
// }

//==================================================================================================

// Permute
// function permute(nums) {
//   let res = [];
//   dfs(nums, [], Array(nums.length).fill(false), res)
//   return res
// };

// function dfs(nums, path, used, res) {
//   if(path.length == nums.length) {
//       res.push(Array.from(path))
//       return
//   }
  
//   for(let i = 0; i < nums.length; i++) {
//       if(used[i]) continue;
//       path.push(nums[i]);
//       used[i] = true;
//       dfs(nums, path, used, res);
//       path.pop();
//       used[i] = false;
//   }
// }

//===============================================================================================
// Selection sorting

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let smallest = i;
//     let temp = arr[i]
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[j] < arr[smallest]) {
//         smallest = j
//       }
//     }
//     arr[i] = arr[smallest]
//     arr[smallest] = temp
//   }
//   return arr
// }

//===============================================================================================
 
// Merge sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort (array) {
//   if (array.length === 1) {
//     return array
//   }
//   // Split Array in into right and left
//   const length = array.length;
//   const middle = Math.floor(length / 2)
//   const left = array.slice(0, middle) 
//   const right = array.slice(middle)
//   // console.log('left:', left);
//   // console.log('right:', right);

  
//   return merge(
//     mergeSort(left),
//     mergeSort(right)
//   )
// }

// function merge(left, right){
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while(leftIndex < left.length && 
//         rightIndex < right.length){
//      if(left[leftIndex] < right[rightIndex]){
//        result.push(left[leftIndex]);
//        leftIndex++;
//      } else{
//        result.push(right[rightIndex]);
//        rightIndex++
//     }
//   }  
//   // console.log(left, right)
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }


// const answer = mergeSort(numbers);
// console.log(answer);

//===============================================================================================
// Insertion Sort

// function insertionSort(arr) {
//   for(let i = 1; i < arr.length; i++) {
//     let current = arr[i]; // storing an initial value
//     let j = i - 1;    // initialzing the index of the previous value
//     while(j >= 0 && arr[j] > current) { // scanning the sorted array  
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current
//   }
//   return arr
// }

//===============================================================================================
// Binary Search Tree

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return
    }
    let currentNode = this.root;
    while(true) {
      if(this.value < currentNode.value) {
        //left
        if(!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
          currentNode = currentNode.left;
      } else {
        // right 
        if(!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  lookup(value) {
    if(this.root.value == value) {
      return this.root
    }
    if(!this.root) {
      return false
    }
    let currentNode = this.root
    while(true) {
      if(value < currentNode.value) {
        //left
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else if(value == currentNode.value) {
        return currentNode
      }
    }
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          if(parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
  breadthFirstSearch(value) {
    let currentNode = this.root;
    let list= [];
    let queue = [];
    queue.push(currentNode);
    
    while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right) 
      }
    }
    return list
  }
  breadthFirstSearchRecursive(queue, list) {
    if(!queue.length) {
      return list;
    }
    const currentNode = this.root;
    list.push(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left)
    }
    if(currentNode.right) {
      queue.push(currentNode.right)
    }
    return breadthFirstSearchRecursive(queue, list)
  }
  DFSInorder(){
    return traverseInOrder(this.root, [])
  }
  DFSPostorder(){
return traversePostOrder(this.root, [])
  }
  DFSPreorder(){
return traversePreOrder(this.root, [])
  }
}

function traverseInOrder(node, list) {
  if(node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)
  if(node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}

function traversePreOrder(node, list) {
  list.push(node.value) 
  if(node.left) {
    traversePreOrder(node.left, list)
  }
  if(node.right) {
    traversePreOrder(node.right, list)
  }
  return list
}

function traversePostOrder(node, list) {
  if(node.left) {
    traversePostOrder(node.left, list)
  }
  if(node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value) 

  return list
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree.breadthFirstSearch();
// tree.breadthFirstSearchRecursive([tree.root], []);  // here if we said this.root then the this would refer to the original class not the class instance 
tree.DFSInorder();

function bfsr(queue, list) {
  if(!queue.length) {
    return list
  }
  let currentNode = queue.shift();
  if(currentNode.left) {
    queue.push(currentNode.left)
  }
  if(currentNode.right) {
    queue.push(currentNode.right)
  }
  return bfsr(queue, list)
}

//===================================================================================================
// Template tag function
// function upper(strings,...values) {
// 	var s = "";
// 	for (let i=0; i<strings.length; i++) {
// 		if (i > 0) {
// 			s += String(values[i-1]).toUpperCase();
// 		}
// 		s += strings[i];
// 	}
// 	return s;
// }

// var name = "kyle",
// 	twitter = "getify",
// 	topic = "JS Recent Parts";

// console.log(
// 	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
// 	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
// );
//===================================================================================================
// Memoization

// function memo() {
//   let cache = {};
//   return function(n) {
//     if(n in cache) {
//       return cache[n]
//     } else {
//       cache[n] = n + 80;
//       return cache[n];
//     }
//   }
// }

// const memoized = memo()

// memoized(5);
//===================================================================================================
// Fibonacci
function fibonacci(num) {
  let cache = {};
  return function fib(n) {
    if(n in cache) {
      return cache[n];
    } else {
      if(n < 2) {
        return n
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n]
      }
    }
  }
}

function fibonacciButtomUp(num) {
  let list = [0, 1];
  for(let i = 2; i <=num; i++) {
    list.push(list[i-2] + list[i -1])
  }
  return list.pop()
}

const fastFib = fibonacci()
console.log(fastFib(100))
//===================================================================================================


var getSmallestString = function(n, k) {
  const str = []
  

  for(let i = 0; i < n; i++) {
      str[i] = 'a'
  }
  
  k = k - n;  24
  
  for(i = n - 1 ; i >= 0; i--) {
      if(k == 0) {
         return str.join('')
      } else if( k < 25) {
          str[i] = String.fromCharCode(97 + k)
          k = 0
      } else {
          str[i] = String.fromCharCode(97 + 25)
          k -= 25
      }
  }
  
  return str.join('')
};

// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.
const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};
//===================================================================================================
function nestedEvenSum(nestedObj) {
    let res = 0
    for(let key in nestedObj) {
      if(typeof nestedObj[key] === 'number' && nestedObj[key] %2 === 0) {
        res += nestedObj[key]
      }
      if(typeof nestedObj[key] === 'object') {
        res += nestedEvenSum(nestedObj[key])
      }
    }
    return res
  }

console.log(nestedEvenSum(obj2))
//===================================================================================================
// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

const arr = ['jax', 'garen', 'Darius']

function capitalizeWords(wordsArr) {
  if(!wordsArr.length) return wordsArr

  const firstWord = wordsArr[0].toUpperCase()
  return [firstWord].concat(capitalizeWords(wordsArr.slice(1)))
}

console.log(capitalizeWords(arr))


// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};
//===================================================================================================
function stringifyNumbers(nestedObj){
  let newObj = Object.assign({},nestedObj)
  for(let key in nestedObj){
    if(typeof newObj[key] === 'number') {
      newObj[key] = newObj[key].toString()
    } else if(typeof newObj[key] === 'object') {
      newObj[key] = stringifyNumbers(newObj[key])
    }
  }
  return newObj
}

console.log(stringifyNumbers(obj))

//===================================================================================================
// collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.
const obj1 = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};
function collectStrings(obj){
  let res = []
  for(let key in obj) {
    if(typeof obj[key] === 'string') {
      res.push(obj[key])
    } else if(typeof obj[key] === 'object') {
     res = res.concat(collectStrings(obj[key]))
    }
  }
  return res
}

console.log(collectStrings(obj1))

===================================================================================
function binarySearch(arr, val){
  let p1 = 0
  let p2 = arr.length - 1
  while(p1 <= p2){
  let m = Math.floor((p1 + p2) / 2)
    if(arr[m] > val){
      p2 = m -1
    } else if(arr[m] < val) {
      p1 = m + 1
    } else return m
  }
  return -1
}
 
const arry = [1,2,3,4,5,6,7,8,9,10]

console.log(binarySearch(arry,10)) 
