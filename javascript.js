let varA,varB,opA;
let deNumber=0;
let numArray=[];
let operatorClicked=false;

const screen=document.querySelector("#screen");
const screenText=document.createElement("div");
screenText.textContent=deNumber;
screenText.style.fontFamily="Lato";
screenText.style.fontWeight="bold";
screenText.style.fontSize="50px";

screen.appendChild(screenText);

const number=document.querySelectorAll("#number");
number.forEach(numbers => {numbers.addEventListener("click", displayNumbers);});
const operatorbtn=document.querySelectorAll("#operator");
operatorbtn.forEach(operators => {operators.addEventListener("click", operate);});

const clearbtn=document.querySelector("#clear");
clearbtn.addEventListener("click",clearScreen);
const deletebtn=document.querySelector("#delete");
deletebtn.addEventListener("click",deleteNumber);

const equalbtn=document.querySelector("#equalSign");
equalbtn.addEventListener("click",evaluate);
const dotbtn=document.querySelector("#dot");
dotbtn.addEventListener("click",displayNumbers);

function Addition(a,b)
{
    return a+b;
}

function Subtraction(a,b)
{
    let result = (a - b).toFixed(6);
    return parseFloat(result);
}

function Multiplication(a,b)
{
    return a*b;
}

function Division(a,b)
{
    if(b!=0)
    {
        let result = (a / b).toFixed(6);
        return parseFloat(result);
    }
    else
        return "Error Division by 0";
}

function clearScreen()
{
    deNumber=0;
    numArray=[];
    varA=0;
    varB=0;
    operatorClicked=false;
    screen.textContent="";
    screenText.textContent=deNumber;
    screen.appendChild(screenText);
}

function deleteNumber()
{
    numArray.pop();
    screen.textContent="";
    screenText.textContent=numArray.reduce((target,val)=>{return target+val},"");
    screen.appendChild(screenText);

    deNumber=0;
    console.log(deNumber);
}

function displayNumbers(e)
{
    numArray.push(e.target.textContent);
    
    screen.textContent="";
    screenText.textContent=numArray.reduce((target,val)=>{return target+val},"" );
    screen.appendChild(screenText);

    deNumber=Number(numArray.reduce((target,val)=>{return target+val},""));
}

function operate(e)
{
    if(!operatorClicked)
    {
        varA=Number(numArray.reduce((target,val)=>{return target+val},"" ));
        numArray=[];
    }
    if(operatorClicked)
        evaluate();
    
    opA=e.target.textContent;
    operatorClicked=true;
}
function evaluate(e)
{
    if(operatorClicked)
    {
        varB=Number(numArray.reduce((target,val)=>{return target+val},"" ));
        numArray=[];
    }

    let temp;
    switch(opA)
    {
        case '+':
            temp=Addition(varA,varB);
            varA=temp;
            screenText.textContent="";
            screenText.textContent=temp;        
            screen.appendChild(screenText);
            break;
        case '-':
            temp=Subtraction(varA,varB);
            varA=temp;
            screenText.textContent="";
            screenText.textContent=temp;        
            screen.appendChild(screenText);
            break;
        case '×':
            temp=Multiplication(varA,varB);
            varA=temp;
            screenText.textContent="";
            screenText.textContent=temp;        
            screen.appendChild(screenText);
            break;
        case '÷':
            temp=Division(varA,varB);
            varA=temp;
            screenText.textContent="";
            screenText.textContent=temp;        
            screen.appendChild(screenText);
            break;
        default:
            operatorClicked=false;
            break;
    }
    console.log("this is A",varA);
    console.log("this is B",varB);
}

