console.log("This script is running");

const loopSteps = 10;
const loopStepMultiplier = 0.1;

let resultElement;

async function GetAdvice()
{
    console.log("Button Clicked");

    resultElement = await document.getElementById('result');
    
    resultElement.textContent = "Getting your advice...";

    const response = await fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => data.slip)
        .catch((error) => error);

        await SetContent(response.advice);
}

async function SetContent(data)
{
    resultElement.textContent = data;
}