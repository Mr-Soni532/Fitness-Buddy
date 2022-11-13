let userDetails = JSON.parse(localStorage.getItem('bioDetails'))
let username = document.querySelector('#username')
// username update
username.innerText = userDetails.username;
