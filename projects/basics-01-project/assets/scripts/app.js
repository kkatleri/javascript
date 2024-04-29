let result=0;
let calculationDesc='';
let logEntries=[];

function getUserInput(){
    return parseInt(userInput.value);
}

function buildCalculationDescription(operator, prevResult, userEnteredNum){
    return `${prevResult} ${operator} ${userEnteredNum}`;
}

function writeLog(operation, prevResult, userEnteredNum) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        number: userEnteredNum,
        result: result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculate(operation){

    const userEnteredNum = parseInt(getUserInput());
    let prevResult = result;
    let mathOperator;

    if(operation=='ADD'){
        result += userEnteredNum;
        mathOperator='+';
    } else if(operation=='SUBTRACT'){
        result -= userEnteredNum;
        mathOperator='-';
    } if(operation=='MULTIPLY'){
        result *= userEnteredNum;
        mathOperator='*';
    } if(operation=='DIVIDE'){
        result /= userEnteredNum;
        mathOperator='/';
    }

    calculationDesc = buildCalculationDescription(mathOperator, prevResult, userEnteredNum);
    writeLog(operation, prevResult, userEnteredNum);
    
    outputResult(result, calculationDesc);
}

function add(){calculate('ADD');}
function subtract(){calculate('SUBTRACT');}
function multiply(){calculate('MULTIPLY');}
function divide(){calculate('DIVIDE');}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);