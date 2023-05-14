let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }
    })

    let  header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

}


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
    });

    ScrollReveal().reveal('.home-content', { origin:'left' });
    ScrollReveal().reveal('.home-image', { origin:'right' });
    // ScrollReveal().reveal('.about-content', { origin:'bottom' });
    // ScrollReveal().reveal('.about-image', { origin:'top' });
    // ScrollReveal().reveal('.projects .box', { origin:'top' });
    // ScrollReveal().reveal('.contact h2', { origin:'top' });
    // ScrollReveal().reveal('#name', { origin:'left' });
    // ScrollReveal().reveal('#email', { origin:'right' });
    // ScrollReveal().reveal('#mobile', { origin:'left' });
    // ScrollReveal().reveal('#subject', { origin:'right' });
    // ScrollReveal().reveal('.textbox', { origin:'bottom' });
    //ScrollReveal().reveal('.home-content h1', { origin:'top' });
    //ScrollReveal().reveal('.home-content p', { origin:'bottom' });


    const typed = new Typed('.multiple-text', {
        strings: ['Mechanical Engineer', 'MEP Engineer', 'Design Engineer'],
        typeSpeed: 75,
        backSpeed: 24,
        backDelay: 1000,
        loop: true
    })
    
    