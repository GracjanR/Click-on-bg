const body = document.querySelector('body');

a = confirm("CLICK ON SITE BODY")

const random = () => {
    r = Math.floor(Math.random()* 255);
    g = Math.floor(Math.random()* 255);
    b = Math.floor(Math.random()* 255);
    const doneRgb = `rgb(${r},${g},${b})`;
    body.style.backgroundColor = doneRgb;
}

console.log(body)

body.addEventListener('click',random)
