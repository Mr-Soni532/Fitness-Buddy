let goals = JSON.parse(localStorage.getItem('goals'))
let rcalories = JSON.parse(localStorage.getItem('updatedCalories'))
let eCal = JSON.parse(localStorage.getItem('exCal'))

let remaining_calories = document.querySelector('#remaining_calories');
let foodCalories = document.querySelector('#food_calories');
let exerciseCalories = document.querySelector('#exercise_calories');
let netCal = document.querySelector('#net_calories');
let goal_calories = document.querySelector('#goal_calories');


// display calories
foodCalories.innerText = rcalories;
exerciseCalories.innerText = eCal;
remaining_calories.innerText = goals.calories-(rcalories - eCal);
netCal.innerText = rcalories - eCal;
goal_calories.innerText = goals.calories;
