// ==============================
// TOOP PODCAST WEBSITE
// ==============================

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Navbar background on scroll

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "rgba(0,0,0,0.95)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    }

    else{

        nav.style.background = "rgba(0,0,0,.75)";
        nav.style.boxShadow = "none";

    }

});

// Fade-in animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.episode,#about,.social").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".8s";

observer.observe(el);

});