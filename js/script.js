const cards = document.querySelectorAll('.card-sobre');

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

cards.forEach(card=>{
observer.observe(card);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });

});


const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// const texto = "Sophia Ribeiro Mendonça";
// let i = 0;

// function digitar(){
//     if(i < texto.length){
//         document.getElementById("nome").innerHTML += texto.charAt(i);
//         i++;
//         setTimeout(digitar, 80);
//     }
// }

// digitar();

const palavras = [
    "Sophia Ribeiro Mendonça",
    "Estudante de Sistemas para Internet",
];

let i = 0;
let j = 0;
let apagando = false;

function escrever(){

    const elemento = document.getElementById("typing");

    if(!apagando){
        elemento.innerHTML = palavras[i].substring(0, j++);
        if(j > palavras[i].length){
            apagando = true;
            setTimeout(escrever, 1500);
            return;
        }
    }else{
        elemento.innerHTML = palavras[i].substring(0, j--);
        if(j === 0){
            apagando = false;
            i = (i + 1) % palavras.length;
        }
    }

    setTimeout(escrever, apagando ? 50 : 100);
}

escrever();

const container = document.querySelector(".container-projetos");
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");

const proj = document.querySelectorAll(".card-projeto");

let index = 0;
const visibleCards = 3;

next.addEventListener("click", () => {
    if(index < proj.length - visibleCards){
        index++;
        updateCarousel();
    }
});

prev.addEventListener("click", () => {
    if(index > 0){
        index--;
        updateCarousel();
    }
});

function updateCarousel(){
    const cardWidth = cards[0].offsetWidth + 100;
    container.style.transform = `translateX(-${index * cardWidth}px)`;

    prev.style.opacity = index === 0 ? "0.3" : "1";
    next.style.opacity = index >= cards.length - visibleCards ? "0.3" : "1";
}