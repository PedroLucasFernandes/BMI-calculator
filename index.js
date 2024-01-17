const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");

const button = document.querySelector("button");
const paragraph = document.querySelector("p");

button.addEventListener("click", function(event){
    event.preventDefault();

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        paragraph.innerText = "Please enter valid weight and height values.";
        return;
    }

    const BMI = weight / (height / 100) ** 2;

    const BMIClassification = BMI < 18.5 ? "Underweight" :
                              (BMI >= 18.5 && BMI <= 24.9) ? "Normal Weight" :
                              (BMI >= 25 && BMI <= 29.9) ? "Overweight" :
                              "Obesity";

    paragraph.innerText = `Your BMI is: ${BMI.toFixed(2)}. You are ${BMIClassification}`;
});