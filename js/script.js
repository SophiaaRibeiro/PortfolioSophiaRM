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


const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", ()=>{
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
    "Desenvolvedora Front-End",
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