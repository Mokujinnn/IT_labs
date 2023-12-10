const slider = document.querySelector(".gallery__sliders");
const images = document.querySelectorAll(".gallery__sliders img");
let count = 0;
let width = 0;

document.querySelector(".gallery__right").addEventListener("click", sliderRightButton);
document.querySelector(".gallery__left").addEventListener("click", sliderLeftButton);

function sliderRightButton()
{
    count++;
    if (count >= images.length){
        count = 0;
    }
    rollSlider()
}

function sliderLeftButton()
{
    count--;
    if (count < 0){
        count = images.length - 1;
    }
    rollSlider()
}

function rollSlider(){
    slider.style.left = -count * width + "px";
}

function init()
{
    width = document.querySelector(".gallery__slider").offsetWidth;
    slider.style.width = width * images.length + "px";
    images.forEach(image => {
        image.style.width = width + "px";
        image.style.height = "auto";
    })
    rollSlider();
}

init();
window.addEventListener("resize", init);


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};