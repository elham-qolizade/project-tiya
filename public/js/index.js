// let menuButton = document.getElementById("menuButton");
// let list = document.getElementById("list");
// menuButton.addEventListener("click", function () {

;


function changecolor() {
    let list = document.getElementById("list");
    list.style.backgroundColor = "#3a3e5a";
    toggleMenu();
    upper()

}
function upper() {
    let menu = document.getElementById('list');
    menu.classList.toggle('open');

}
function toggleMenu() {

    let list = document.getElementById("list");

    let menuButton = document.getElementById("menuButton");
    menuButton.classList.toggle("close");
    // document.getElementById("menu-icon").style.opacity = 0; 

    if (document.getElementById("menu-icon").style.opacity == 0 && document.getElementById("menu-icon").style.opacity.length != 0) {
        document.getElementById("menu-icon").style.opacity = 1;
    } else {
        document.getElementById("menu-icon").style.opacity = 0;
    }


}
let num = 1;
let time = setInterval(() => {
    num++;
    reset();
    if (num > 3) {
        num = 1;
    }
    document.querySelector("#n" + num).classList.remove("is-hidden");
    document.querySelector("#n" + num).classList.add("is-visible");
}, 3000);
function reset() {
    for (i = 1; i <= 3; i++) {
        document.querySelector("#n" + i).classList.add("is-hidden");
        document.querySelector("#n" + i).classList.remove("is-visible");

    }
}

let menuLink = document.querySelector('.list li a');
menuLink.addEventListener('click', function (e) {
    e.preventDefault();

});

menou = document.querySelector(".menu-accsess");
menou.onclick = function () {
    list = document.querySelector(".list");
    list.classList.toggle("active")
}
let menouLink = document.querySelector('.list li a');
menouLink.addEventListener('click', function (e) {
    e.preventDefault();
    // let aboutSection = document.querySelector('#about');
    // aboutSection.scrollIntoView({ behavior: 'smooth' });


});