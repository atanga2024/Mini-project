function mymenufunction() {
    var menuBth =document.getElementById("myNavMenu");
    
    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else{
        menuBth.className = "nav-menu";
    }
}

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toogle-switch");
toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

var typingEffect = new Typed(".typed-text", {
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backspeed: 80,
    backDelay: 2000,
    
})

const sr = scrollReveal({
    origin: "top",
    distance: "80px",
    duration: "2000",
    reset: true,
})

sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", { delay: 200});
sr.reveal(".text-btn", { delay: 200});
sr.reveal(".social-icon", { delay: 200});
sr.reveal(".featured-image", { delay: 320});


sr.reveal(".project-box", { interval: 200});

sr.reveal(".top-header", {});

const srcleft = scrollReveal({
    origin: "left",
    distance: "80px ",
    duration: 2000,
    reset: true, 
})

srcleft.reveal(".about-info",{delay: 100});
srcleft.reveal(".contact-info",{delay: 100});