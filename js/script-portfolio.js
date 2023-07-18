// menu

let menuBtn = document.querySelector('#menu-icon');
let menuBar = document.querySelector('.menu-bar');

menuBtn.addEventListener('click',() =>{
    //menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
})

window.onscroll = () => {
    //menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// // Récupérer toutes les images avec la classe "zoomable"
// const images = document.querySelectorAll('zoomable');

// // Parcourir toutes les images et ajouter un événement de clic
// images.forEach(image => {
//   image.addEventListener('click', () => {
//     // Ajouter ou supprimer la classe "zoomed" pour agrandir ou réduire l'image
//     image.classList.toggle('zoomed');
//   });
// });

// scroll reveal  //

// ScrollReveal({
//     reset:true,
//     distance:'100px',
//     duration:1500,
//     delay:200
// });

// //index//

// ScrollReveal().reveal('.home-bio h1', { origin: 'left' });
// ScrollReveal().reveal('.home-bio p', { origin: 'right' });
// ScrollReveal().reveal('.heading', { origin: 'top' });
// ScrollReveal().reveal('.about-text', { origin: 'top' });
// ScrollReveal().reveal('.skills-items', { origin: 'bottom' });
// ScrollReveal().reveal('.formation-box', { origin: 'top' });
// ScrollReveal().reveal('.projects-items', { origin: 'right' });
// ScrollReveal().reveal('.form', { origin: 'left' });

// // projet //

// ScrollReveal().reveal('.skills-items-projects', { origin: 'left' });


// hidden text //

let hide = true;
var hidden = document.querySelectorAll('.hidden');
hidden.forEach((hidden) => {
    hidden.style.display='none';   
});

var btn = document.querySelectorAll('.btn-display');

btn.forEach((btn) => {
btn.addEventListener('click',() => {
    
    if(hide)
    {
        hidden.forEach((hidden) => {
            hidden.style.display='block';   
        });
        btn.textContent='Lire moins';
        hide=false;
        
    }else{
        hidden.forEach((hidden) => {
            hidden.style.display='none';   
        });
        btn.textContent='Lire plus';
        hide=true;    
    }
})});


