//Write a function to divide each element by the sum of all non NaN values

//Input: [4,null,-2,3,null,1,0]

//assuming not NaN does not include '4' or numbers in strings
//sum of numbers shld be 6 not 10 and in js null/10 = 0

let input = [4,null,-2,3,null,1,0]
let filter = []

const filterInteger = function(input){
    filter = []
    for(i =0;i<input.length;i++){
        if (Number.isInteger(input[i]) ){
            filter.push(input[i])
        }
    }
}

const replace_null = function(answer){
    for(i=0;i<answer.length;i++){
        if (answer[i] == 0) {
            answer[i] = null;
        }
    }
}

filterInteger(input)

// OR if treated -2 as 2
const convert = filter.map((num)=> Math.abs(num))

//chec if element is a string or integer
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = convert.reduce(reducer);

const answer = function(input){
    var divide = input.map((el)=> el/sum)
    return divide
}

const final = answer(input)

const final_answer = replace_null(final);

console.log(final); 





