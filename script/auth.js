
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
    window.location.href = 'login.html'
}
function loginData(e) {
    e.preventDefault();
    let form = document.querySelector('#loginForm');
    if(form.lemail.value == auth.email && form.lpassword.value == auth.password){
        window.location.href = 'home.html'
        alert('✔ WELCOME 😊');
    } else alert('❌ Wrong Credentials😢');
    
}

