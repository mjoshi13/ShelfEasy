var i = 0;
const images = document.querySelectorAll('img');
const body = document.querySelector('body');
const button = document.createElement("button");
button.innerText = "Next image";



for(let i = 0; i < images.length; i++) {
    document.body.removeChild(images[i]);
}


function updateImage() {
    i++;
    if(i === images.length) {
        i = 0;
    }
    body.removeChild(div);
    div = createDiv();
    body.insertBefore(div, button);
}

function createDiv() {
    let div = document.createElement('div');
    div.appendChild(images[i]); 
    return div;
}

let div = createDiv();
body.appendChild(div);
body.appendChild(button);



button.addEventListener('click', () => {
    updateImage();
});

setInterval(updateImage, 10000);


