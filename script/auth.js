
let auth = JSON.parse(localStorage.getItem('auth')) || {}

function submitBtn() {
    let check = document.querySelector('#check').checked;
    if (check) {
        document.querySelector('#submitBtn').style['pointer-events'] = 'all';
        document.querySelector('#submitBtn').style['background-color'] = '#2a90d5';
    } else {
        document.querySelector('#submitBtn').style['pointer-events'] = 'none';
        document.querySelector('#submitBtn').style['background-color'] = 'grey';
    }
}
function signinData(e) {
    e.preventDefault();
    let form = document.querySelector('form');
    auth['email'] = form.cEmail.value;
    auth['password'] = form.cPassword.value;
    localStorage.setItem('auth', JSON.stringify(auth))
    setGoals();
    window.location.href = 'login.html'
}
function loginData(e) {
    e.preventDefault();
    let form = document.querySelector('#loginForm');
    if (form.lemail.value == auth.email && form.lpassword.value == auth.password) {
        window.location.href = 'home.html'
        alert('✔ WELCOME 😊');
    } else alert('❌ Wrong Credentials😢');

}

function setGoals() {
    let bioDetails = JSON.parse(localStorage.getItem('bioDetails')) || {};

    let calories = 10 * bioDetails.weight + 6.25 * bioDetails.height - 5 * bioDetails.age + 5 * bioDetails.activity + 500;

    let goals = {
        'calories': Math.floor(calories),
        'fat': Math.floor(((calories * 25) / 100) / 10),
        'protein': Math.floor(bioDetails.weight * 1.5),
        'carbs': Math.floor(((calories * 35) / 100) / 3),
    }
    localStorage.setItem('goals', JSON.stringify(goals))
}