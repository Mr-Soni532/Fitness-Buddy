// let foodData = JSON.parse(localStorage.getItem('foodData')) || [];
let breakfast = document.querySelector('#breakfast')
let lunch = document.querySelector('#lunch')
let dinner = document.querySelector('#dinner')
let snacks = document.querySelector('#snacks')
let categoryArr = [breakfast, lunch, dinner, snacks]

function handleUpdate() {
    categoryArr.forEach(el => {
        let data = getdata(dynamicUrl(el.value))
        data.then(data => console.log(data))
    })
}

function dynamicUrl(val) {
    return `https://api.spoonacular.com/recipes/guessNutrition?title=${val}&apiKey=6fb8b413cfcf4fd9aae88cb0f4b89dcb`
}

async function getdata(url) {
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
}

