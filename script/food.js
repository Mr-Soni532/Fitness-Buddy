let goals = JSON.parse(localStorage.getItem('goals'));
let breakfast = document.querySelector('#breakfast')
let lunch = document.querySelector('#lunch')
let dinner = document.querySelector('#dinner')
let snacks = document.querySelector('#snacks')

let bQuantity = document.querySelector('#bQuantity')
let lQuantity = document.querySelector('#lQuantity')
let dQuantity = document.querySelector('#dQuantity')
let sQuantity = document.querySelector('#sQuantity')

let categoryArr = [breakfast, lunch, dinner, snacks]; // input val
let quantityArr = [bQuantity, lQuantity, dQuantity, sQuantity];//input val
let firstTableArr = document.querySelector('#addFoodTable').children
let SecondTableArr = document.querySelector('.totalData>tbody').children

let totalCalories = 0;
let totalFat = 0;
let totalProtein = 0;
let totalCarbs = 0;

function handleUpdate() {
    let bag;
    categoryArr.forEach((el, index) => {
        let data = getdata(dynamicUrl(el.value || 'apple'))
        data.then(data => {
            //* updating first table
            firstTableArr[index].children[1].innerText = data.calories.value
            firstTableArr[index].children[2].innerText = data.fat.value
            firstTableArr[index].children[3].innerText = data.protein.value
            firstTableArr[index].children[4].innerText = data.carbs.value

            //* calculating total nutritions
            totalCalories += data.calories.value
            totalFat += data.fat.value
            totalProtein += data.protein.value
            totalCarbs += data.carbs.value
        })

    })

    setTimeout(() => {
        //*updating second table 1st row - TOTAL
        SecondTableArr[0].children[1].innerText = totalCalories
        SecondTableArr[0].children[2].innerText = totalFat
        SecondTableArr[0].children[3].innerText = totalProtein
        SecondTableArr[0].children[4].innerText = totalCarbs

        //*updating second table 2nd row - GOALS
        SecondTableArr[1].children[1].innerText = goals.calories
        SecondTableArr[1].children[2].innerText = goals.fat
        SecondTableArr[1].children[3].innerText = goals.protein
        SecondTableArr[1].children[4].innerText = goals.carbs

        //*updating second table 2nd row - REMAINING
        SecondTableArr[2].children[1].innerText = goals.calories - totalCalories
        SecondTableArr[2].children[2].innerText = goals.fat - totalFat
        SecondTableArr[2].children[3].innerText = goals.protein - totalProtein
        SecondTableArr[2].children[4].innerText = Math.abs(goals.carbs - totalCarbs)
        let remaining_calories = totalCalories;
        localStorage.setItem('updatedCalories', JSON.stringify(totalCalories))
    }, 3500);
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

// -------- water consumption ---
let glassCount = 0;
document.querySelector('#add1').addEventListener('click', () => {
    glassCount++;
    display();
    changeGlass()
})
document.querySelector('#add2').addEventListener('click', () => {
    glassCount += 2;
    display();
    changeGlass()
})
document.querySelector('#add3').addEventListener('click', () => {
    glassCount += 3;
    display()
    changeGlass()
})
function addGlass() {
    let val = document.querySelector('#glassCount').value;
    glassCount += +val;
    display();
    changeGlass()
}
function display() {
    document.querySelector('#count').innerText = glassCount
}
function changeGlass() {
    let glass = document.querySelector('#glassImg');
    if (glassCount <= 1)
        glass.src = 'Resource/water_glass/empty.png'
    else if (glassCount > 1 && glassCount < 4)
        glass.src = 'Resource/water_glass/2.png'
    else if (glassCount > 3 && glassCount < 6)
        glass.src = 'Resource/water_glass/4.png'
    else if (glassCount >= 6 && glassCount < 8)
        glass.src = 'Resource/water_glass/6.png'
    else if (glassCount == 8)
        glass.src = 'Resource/water_glass/8.png'
    else if (glassCount > 8)
        glass.src = 'Resource/water_glass/over.png'
}

// ------- food note --------
function foodNote(){
let val = document.querySelector('#foodNote').value;
localStorage.setItem('foodNote', val)
}
foodNoteDisplay();
function foodNoteDisplay(){
    let note = localStorage.getItem('foodNote') || ""
    document.querySelector('#foodNote').innerText = note;
}