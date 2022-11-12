
let bioDetails = JSON.parse(localStorage.getItem('bioDetails')) || {};

function handleHW() {
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
    bioDetails['weight'] = weight
    bioDetails['height'] = height
    localStorage.setItem('bioDetails', JSON.stringify(bioDetails))
    window.location.href = 'weight-goal.html'
}
function handleActivity(){
    let activity = document.querySelector('#activity').value;
    bioDetails['activity'] = activity
    localStorage.setItem('bioDetails', JSON.stringify(bioDetails))
    window.location.href = 'age.html'
}
function handleGoal() {
    let goal = document.querySelector('#goal').value;
    bioDetails['goal'] = goal
    localStorage.setItem('bioDetails', JSON.stringify(bioDetails))
    window.location.href = 'activity.html'
}
function handleAge(){
    let age = document.querySelector('#age').value;
    bioDetails['age'] = age 
    localStorage.setItem('bioDetails', JSON.stringify(bioDetails))
    window.location.href = 'details.html'
}
function handleDetails(){
    let gender = document.querySelector('#gender').value;
    let date = document.querySelector('#date').value;
    bioDetails['gender'] = gender 
    bioDetails['date'] = date 
    localStorage.setItem('bioDetails', JSON.stringify(bioDetails))
    window.location.href = 'username.html'
}
function handleUsername(){
    let username = document.querySelector('#username').value;
    bioDetails['username'] = username 
    localStorage.setItem('bioDetails', JSON.stringify(bioDetails))
    window.location.href = '/signin.html'
}