let weight = document.querySelector("#weight")
let height = document.querySelector("#height")
let bmi_val = document.querySelector('#bmi_val')
let bmi_status = document.querySelector('#bmi_status')

function calCalories(){
    weight = weight.value;
    height = height.value;
    let bmi = eval("weight/(height*height)*10000");
    bmi = bmi.toFixed(2)
    let condition = "";
    if(bmi <= 18.4) condition = "Under Weight"
    else if(bmi >= 18.4 && bmi <= 24.9) condition = "Normal Weight"
    else if(bmi >= 25 && bmi <= 29.9) condition = "Overweight"
    else if(bmi >= 30) condition = "Obese"
    bmi_val.innerText = bmi
    bmi_status.innerText = condition
}