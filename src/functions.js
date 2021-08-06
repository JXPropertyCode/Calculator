// // export default if I remember correctly, is so you can in a file, import randomVariableName from .... file
// // you can call that variable name whatever but if you are just using export itself, you need the specific name in that file

// const mathExpArr = ['+', '-', '/', '*'];
// let expActive = false;
// let negActive = false;
// let decimalActive = false;

// export function inputToDisplay(input) {
//     console.log("input: " + input)
//     if (document.getElementById('display').innerHTML == 0 && input == '-') {
//         // this is for the beginning when inputting a negative when you first start
//         console.log("document.getElementById('display').innerHTML == 0 && input == '-'")
//         negActive = true
//         document.getElementById('display').innerHTML = input
//     } else if (document.getElementById('display').innerHTML == 0 && input < 10) {
//         // this is for the beginning when inputting numbers when you first start
//         console.log("document.getElementById('display').innerHTML == 0 && input < 10")
//         document.getElementById('display').innerHTML = input
//     } else if (document.getElementById('display').innerHTML == 0 && input == '.') {
//         // this is for the beginning when inputting a single decimal when you first start
//         console.log("document.getElementById('display').innerHTML == 0 && input == '.'")
//         decimalActive = true;
//         document.getElementById('display').innerHTML = input
//     } else if (mathExpArr.includes(input) && expActive == false) {
//         // this is for inputting any math expression
//         console.log("mathExpArr.includes(input) && expActive == false")
//         // now if they input a expression and exp wasn't active, then let them add it, then expActive becomes true
//         expActive = true;
//         negActive = false;
//         decimalActive = false;
//         document.getElementById('display').innerHTML += input
//     } else if (input == '-' && expActive == true && negActive == false) {
//         // this is for adding a negative even with an expression present.
//         // for ex. "3x" with an input of '-' would become "3x-" 
//         console.log("input == '-' && expActive == true")
//         negActive = true;
//         decimalActive = false;
//         document.getElementById('display').innerHTML += input
//     } else if (expActive == true && mathExpArr.includes(input) && negActive == false) {
//         // if an expression is active but a negative is not, inputting another expression would replace the current expression
//         // for an ex. "3+" with an input of "x" would become "3x"
//         console.log("expActive == true && mathExpArr.includes(input)")
//         // ex. "3x", if input another expression, lets say "+", would become "3+"
//         document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.slice(0, document.getElementById('display').innerHTML.length-1)
//         document.getElementById('display').innerHTML += input
//         negActive = false;
//         decimalActive = false;
//         // decimalActive would reset since after every expression, the decimal should be able to be inputted again
//     } else if (expActive == true && mathExpArr.includes(input) && negActive == true) {
//         // this occurs when a negative AND an expression is present and you need to remove some expressions
//         // for an example. "3x-", with an input of lets say '+', it would become "3+"
//         console.log("expActive == true && mathExpArr.includes(input) && negActive == true")
//         document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.slice(0, document.getElementById('display').innerHTML.length-2)
//         document.getElementById('display').innerHTML += input
//         negActive = false;
//     } else if (input == '.' && decimalActive == false) {
//         console.log("input == '.' && decimalActive == false && expActuve == true")
//         decimalActive = true;
//         expActive = false;
//         negActive = false;
//         document.getElementById('display').innerHTML += input
//     } else if (decimalActive == false || input < 10) {
//         console.log("All Validated")
//         expActive = false;
//         negActive = false;
//         document.getElementById('display').innerHTML += input
//     }
// }

// export function reset() {
//     // this is to reset the display innerHTML and also certain states
//     console.log("Reset Activated")
//     document.getElementById('display').innerHTML = 0;
//     expActive = false;
//     negActive = false;
//     decimalActive = false
// }

// export function calculateTotal() {
//     console.log(document.getElementById('display').innerHTML)
//     console.log(eval(document.getElementById('display').innerHTML))
//     document.getElementById('display').innerHTML = eval(document.getElementById('display').innerHTML)
// }





// // export default if I remember correctly, is so you can in a file, import randomVariableName from .... file
// // you can call that variable name whatever but if you are just using export itself, you need the specific name in that file

const mathExpArr = ['+', '-', '*', 'x'];
// let expActive = false;
// let negActive = false;
// let decimalActive = false;

export function inputToDisplay(input, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive) {
    // you need to do all of these parameters in orders to get the states to transfer into this function
    console.log("input: " + input)
    if (document.getElementById('display').innerHTML == 0 && input == '-') {
        // this is for the beginning when inputting a negative when you first start
        console.log("document.getElementById('display').innerHTML == 0 && input == '-'")
        setNegActive(true)
        document.getElementById('display').innerHTML = input
    } else if (document.getElementById('display').innerHTML == 0 && input < 10) {
        // this is for the beginning when inputting numbers when you first start
        console.log("document.getElementById('display').innerHTML == 0 && input < 10")
        document.getElementById('display').innerHTML = input
    } else if (document.getElementById('display').innerHTML == 0 && input == '.') {
        // this is for the beginning when inputting a single decimal when you first start
        console.log("document.getElementById('display').innerHTML == 0 && input == '.'")
        setDecimalActive(true)
        document.getElementById('display').innerHTML = input
    } else if (mathExpArr.includes(input) && expActive == false) {
        // this is for inputting any math expression
        console.log("mathExpArr.includes(input) && expActive == false")
        // now if they input a expression and exp wasn't active, then let them add it, then expActive becomes true
        setExpActive(true);
        setNegActive(false);
        setDecimalActive(false)
        document.getElementById('display').innerHTML += input
    } else if (input == '-' && expActive == true && negActive == false) {
        // this is for adding a negative even with an expression present.
        // for ex. "3x" with an input of '-' would become "3x-" 
        console.log("input == '-' && expActive == true")
        setNegActive(true)
        setDecimalActive(false)
        document.getElementById('display').innerHTML += input
    } else if (expActive == true && mathExpArr.includes(input) && negActive == false) {
        // if an expression is active but a negative is not, inputting another expression would replace the current expression
        // for an ex. "3+" with an input of "x" would become "3x"
        console.log("expActive == true && mathExpArr.includes(input)")
        // ex. "3x", if input another expression, lets say "+", would become "3+"
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.slice(0, document.getElementById('display').innerHTML.length-1)
        document.getElementById('display').innerHTML += input
        setNegActive(false)
        setDecimalActive(false)
        // decimalActive would reset since after every expression, the decimal should be able to be inputted again
    } else if (expActive == true && mathExpArr.includes(input) && negActive == true) {
        // this occurs when a negative AND an expression is present and you need to remove some expressions
        // for an example. "3x-", with an input of lets say '+', it would become "3+"
        console.log("expActive == true && mathExpArr.includes(input) && negActive == true")
        document.getElementById('display').innerHTML = document.getElementById('display').innerHTML.slice(0, document.getElementById('display').innerHTML.length-2)
        document.getElementById('display').innerHTML += input
        setNegActive(false)
    } else if (input == '.' && decimalActive == false) {
        console.log("input == '.' && decimalActive == false && expActuve == true")
        setDecimalActive(true)
        setExpActive(false)
        setNegActive(false)
        document.getElementById('display').innerHTML += input
    } else if (decimalActive == false || input < 10) {
        console.log("All Validated")
        setExpActive(false)
        setNegActive(false)
        document.getElementById('display').innerHTML += input
    }
}

export function reset(expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive) {
    // this is to reset the display innerHTML and also certain states
    console.log("Reset Activated")
    document.getElementById('display').innerHTML = 0;
    setExpActive(false)
    setNegActive(false)
    setDecimalActive(false)
}

export function calculateTotal() {
    console.log(document.getElementById('display').innerHTML)
    console.log(eval(document.getElementById('display').innerHTML))
    document.getElementById('display').innerHTML = eval(document.getElementById('display').innerHTML)
}