let track = document.querySelector('.vs_track')
let slides = Array.from(track.children);
let dots = document.querySelector('.dots')
dots = Array.from(dots.children)
console.log(dots)
document.querySelector('#leftArrow').addEventListener('click',handlePrev)
document.querySelector('#rightArrow').addEventListener('click',handleNext)
let index = 1;
let slideId;

let firstClone = slides[0].cloneNode(true);
let lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";
track.append(firstClone);
track.prepend(lastClone);

slides = Array.from(track.children);

function moveSlide() {
    const slideWidth = slides[index].clientWidth;
    track.style.transform = `translateX(-` + slideWidth * index + `px)`;
    updateDot()
}
moveSlide()
function updateDot(){
    dots.forEach(el => {
        if(el.id == `D${index}`){
            el.setAttribute('class', 'active')
        } else {
            el.setAttribute('class', 'inactive')
            

        }
    });
}
function moveToNextSlide() {
    if (index > slides.length) return;
    index++;
    moveSlide();
    
    track.style.transition = "1s";
}
function moveToPrevSlide() {
    if (index <= 0) return;
    index--;
    moveSlide();
    track.style.transition = "1s";
}
function handlePrev(e) {
    clearInterval(slideId)
    moveToPrevSlide();
}
function handleNext(e) {
    clearInterval(slideId)
    moveToNextSlide();
}
setInterval(moveToNextSlide, 3000);
// !----------| Transitionend |------------|
track.addEventListener('transitionend', () => {
    
    if (slides[index].id === 'first-clone') {
        index = 1;
        track.style.transition = "none";
        moveSlide();
    }
    if (slides[index].id === 'last-clone') {
        index = slides.length - 2;
        track.style.transition = "none";
        moveSlide();
    }
})
// console.log(document.querySelector('html').lang)
function handleLang(e){
    document.querySelector('html').lang = e.value;
}