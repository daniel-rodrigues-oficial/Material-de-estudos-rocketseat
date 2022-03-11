//switch
/*
let expression = 'a'

switch (expression){
    case 'a': 
    console.log('a')
    break;
}
*/

function calculate(number1, operator, number2) {
    let result

    switch(operator) {
        case '+': 
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('error')
            break
    }

    return result
}

console.log(calculate(1 , '*', 10))