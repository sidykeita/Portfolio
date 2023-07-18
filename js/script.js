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

// scroll reveal  //

ScrollReveal({
    reset:true,
    distance:'100px',
    duration:1500,
    delay:200
});

//index//

ScrollReveal().reveal('.home-bio h1', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { origin: 'right' });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.about-text', { origin: 'top' });
ScrollReveal().reveal('.skills-items', { origin: 'bottom' });
ScrollReveal().reveal('.formation-box', { origin: 'top' });
ScrollReveal().reveal('.projects-items', { origin: 'right' });
ScrollReveal().reveal('.form', { origin: 'left' });

// projet //

ScrollReveal().reveal('.skills-items-projects', { origin: 'left' });


// hidden text //

let hide = true;
var hidden = document.querySelector('.hidden').style.display = 'none';
var btn = document.querySelector('.btn-display');

btn.addEventListener('click',() => {
    
    if(hide)
    {
        document.querySelector('.hidden').style.display = 'block';
        btn.textContent='Lire moins';
        hide=false;
        
    }else{
        document.querySelector('.hidden').style.display = 'none';
        btn.textContent='Lire plus';
        hide=true;    
    }
})

// sendMail // 

function sendMail()
{
    var params = {
        name:document.querySelector('#name').value,
        email:document.querySelector('#mail').value,
        message:document.querySelector('#message').value,
    };
    
    const serviceID = 'service_9l3w3cn';
    const templateID = 'template_dyrpvmq';
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.querySelector('#name').value = "";
            document.querySelector('#mail').value = "";
            document.querySelector('#message').value = "";
            console.log(res);
            alert('le message a été envoyé');
        }
    ).catch((err) => console.log(err)); 
}
