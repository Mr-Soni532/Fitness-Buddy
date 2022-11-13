let goals = JSON.parse(localStorage.getItem('goals'))
let rcalories = JSON.parse(localStorage.getItem('updatedCalories'))
let userDetails = JSON.parse(localStorage.getItem('bioDetails'))

let remaining_calories = document.querySelector('#remaining_calories');
let foodCalories = document.querySelector('#food_calories');
let goal_calories = document.querySelector('#goal_calories');
let username = document.querySelector('#username')
console.log(userDetails)
// username update
username.innerText = userDetails.username;


// display calories
foodCalories.innerText = rcalories;
remaining_calories.innerText = rcalories;
goal_calories.innerText = goals.calories;
