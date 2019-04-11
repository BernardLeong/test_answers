// Question 2
// Given 2 equal length arrays, write a function to merge them such that [1st element of a1, 1st element of a2, 2nd element of a1, 2nd element of a2, etc..]

// Input: [4,null,-2,3,null,1,0], [1,2,3,4,5,6,7]
// Expected Output: [4,1,null,2,-2,3,3,4,null,5,1,6,0,7]

let first_array = [4,null,-2,3,null,1,0]
let sec_array = [1,2,3,4,5,6,7]
let array = []

const placement = function(arr,arrTwo){
    for(i = 0;i<arr.length; i++){
        array.push(arr[i],arrTwo[i])
    }
}
//invoke function
placement(first_array,sec_array)

console.log(array);


