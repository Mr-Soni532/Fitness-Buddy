let userDetails = JSON.parse(localStorage.getItem('bioDetails'))
let calories = 0;
let remaining_calories = document.querySelector('#remaining_calories');
let goal_calories = document.querySelector('#goal_calories');
let username = document.querySelector('#username')

// username update
username.innerText = userDetails.username;

// calculating Ideal Calories 
calories = 10 * userDetails.weight + 6.25 * userDetails.height - 5 * userDetails.age + 5 * userDetails.activity + 500;

// display calories
remaining_calories.innerText = calories;
goal_calories.innerText = calories;
