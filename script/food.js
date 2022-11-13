// let foodData = JSON.parse(localStorage.getItem('foodData')) || [];
let breakfast = document.querySelector('#breakfast')
let lunch = document.querySelector('#lunch')
let dinner = document.querySelector('#dinner')
let snacks = document.querySelector('#snacks')

let bQuantity = document.querySelector('#bQuantity')
let lQuantity = document.querySelector('#lQuantity')
let dQuantity = document.querySelector('#dQuantity')
let sQuantity = document.querySelector('#sQuantity')
let categoryArr = [breakfast, lunch, dinner, snacks];
let quantityArr = [bQuantity,lQuantity,dQuantity,sQuantity];
let firstTableArr = document.querySelector('#addFoodTable').children
let SecondTableArr = document.querySelector('.totalData>tbody').children



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

function handleUpdate() {
    let bag = {};
    categoryArr.forEach((el,i) => {
        let data = getdata(dynamicUrl(el.value))
        data.then(data => bag = data)
        
        //updating table
        document.querySelector('#bcalories').innerText = l
    })
}
// let el = document.querySelector('.totalData>tbody').children
// console.log(el[0].children[1])