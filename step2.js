//1) Sum Zero

const sumZero = (arr) => {
    for(let i = 0; i <= arr.length - 1; i++){
        for(let j = 0; j <= arr.length -1;j++){
            if(i != j){
                if(array[i] + array[j] === 0){
                 return true 
         }
     } 
    }
 } return false
}
let array = [28, 43, -12, 30, 4, 0, 12, 49, 51]

console.log(sumZero(array))

//runtime complexity - O(n^2)
//space complexity - O(1)

//2) Unique Characters

const removeDuplicates = (str) => console.log(Array.from(new Set(str).values()).join(''))

removeDuplicates('hello')

//runtime complexity - O(n)
//space complexity - O(1)

//3) Pangram Sentence

const pangramChecker = (str) => new Set((str).toLowerCase().replace(/[^a-z]/g,'')).size === 26 ? true : false

console.log(pangramChecker('A quick brown fox jumps over the lazy dog'))

//runtime complexity - O(n)
//space complexity - O(1)

//Longest Word

const findLongestWord = (arr) => Math.max(...(arr.map((el) => el.length)))

console.log(findLongestWord(["hi", "hello"]))

//runtime complexity - O(n)
//space complexity - O(1)
