window.addEventListener('load', init, false);
function init() {
    let div = document.querySelector('#ocultar-y-mostrar');
    div.style.visibility = 'visible';
    let boton = document.querySelector('#ocultar-mostrar');
    boton.addEventListener('click', function (e) {
        if(div.style.visibility === 'visible'){
            div.style.visibility = 'hidden';
        }else{
            div.style.visibility = 'visible';
        }
    }, false);
}

// search-box open close js code
let navbar = document.querySelector(".navbar");


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}

let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}



