let exercise = document.querySelector('#exercise')
let rep = document.querySelector('#rep')

function addExercise() {
    let calories = exercise.value * rep.value
    localStorage.setItem('exCal', calories)
    window.location.href = '/home.html'
}
