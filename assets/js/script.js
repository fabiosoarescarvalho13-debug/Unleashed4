/*==================================================
          UNLEASHED TECHNOLOGIES
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
                    MENU MOBILE
    ==================================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            menuBtn.innerHTML = navbar.classList.contains("active")
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });

        document.querySelectorAll(".navbar a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

    }

    /*==================================================
                      HEADER
    ==================================================*/

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

    /*==================================================
                     FAQ
    ==================================================*/

    document.querySelectorAll(".faq-item").forEach(item => {

        const title = item.querySelector("h3");
        const text = item.querySelector("p");

        if (!title || !text) return;

        text.style.display = "none";

        title.addEventListener("click", () => {

            const open = text.style.display === "block";

            text.style.display = open ? "none" : "block";

            const icon = title.querySelector("i");

            if (icon) {

                icon.className = open
                    ? "fa-solid fa-plus"
                    : "fa-solid fa-minus";

            }

        });

    });

    /*==================================================
                ANIMAÇÕES
    ==================================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(

        ".service-card, .project-card, .team-card, .testimonial-card, .partner"

    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    /*==================================================
                    SCROLL SUAVE
    ==================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});


/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hidden");

        setTimeout(() => {

            loader.remove();

        }, 600);

    }, 1200);

});


/*==================================================
                CURSOR
==================================================*/

const cursor = document.querySelector(".cursor");

if (cursor) {

    let mouseX = 0;
    let mouseY = 0;

    let x = 0;
    let y = 0;

    document.addEventListener("mousemove", e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    function animateCursor() {

        x += (mouseX - x) * 0.35;
        y += (mouseY - y) * 0.35;

        cursor.style.transform =
            `translate(${x}px, ${y}px) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    document.querySelectorAll("a, button, .btn").forEach(el => {

        el.addEventListener("mouseenter", () => {

            cursor.classList.add("active");

        });

        el.addEventListener("mouseleave", () => {

            cursor.classList.remove("active");

        });

    });

}


/*==================================================
            PARTÍCULAS (LEVE)
==================================================*/

const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    function resize() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resize();

    window.addEventListener("resize", resize);

    const particles = [];

    const total = 35;

    for (let i = 0; i < total; i++) {

        particles.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            vx: (Math.random() - .5) * .5,
            vy: (Math.random() - .5) * .5,

            r: Math.random() * 2 + 1

        });

    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();

            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

            ctx.fillStyle = "#780ad3";

            ctx.fill();

        });

        for (let i = 0; i < particles.length; i++) {

            for (let j = i + 1; j < particles.length; j++) {

                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;

                const d = Math.sqrt(dx * dx + dy * dy);

                if (d < 90) {

                    ctx.beginPath();

                    ctx.strokeStyle = "rgba(120,10,211,.15)";

                    ctx.moveTo(particles[i].x, particles[i].y);

                    ctx.lineTo(particles[j].x, particles[j].y);

                    ctx.stroke();

                }

            }

        }

        requestAnimationFrame(draw);

    }

    draw();

}

//==================================================
// ANIMAÇÃO DAS SEÇÕES NO SCROLL
//==================================================

const sections = document.querySelectorAll(
".about, .stats, .technology"
);

const sectionObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.25
});

sections.forEach(section=>{

    sectionObserver.observe(section);

});

//==================================================
// TIMELINE
//==================================================

const timelineItems =
document.querySelectorAll(".timeline-item");

const timelineObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

timelineItems.forEach(item=>{

    timelineObserver.observe(item);

});

//==================================================
// STATS COUNTER
//==================================================

const stats =
document.querySelector(".stats");

const counters =
document.querySelectorAll(".counter");

const statCards =
document.querySelectorAll(".stat-box");

let started = false;

const statsObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !started){

            started = true;

            statCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show");

                },index*180);

            });

            counters.forEach(counter=>{

                const target =
                Number(counter.dataset.target);

                let current = 0;

                const increment =
                target/60;

                function update(){

                    current += increment;

                    if(current < target){

                        counter.textContent =
                        Math.floor(current);

                        requestAnimationFrame(update);

                    }else{

                        counter.textContent =
                        target;

                    }

                }

                update();

            });

        }

    });

},{
    threshold:.3
});

if(stats){

    statsObserver.observe(stats);

}

//==================================================
// TECHNOLOGIES
//==================================================

const techItems =
document.querySelectorAll(".tech-item");

const techObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            techItems.forEach((item,index)=>{

                setTimeout(()=>{

                    item.classList.add("show");

                },index*120);

            });

        }

    });

},{
    threshold:.2
});

const techSection =
document.querySelector(".technology");

if(techSection){

    techObserver.observe(techSection);

}

//==================================================
// HERO 3D
//==================================================

const heroImage =
document.querySelector(".hero-image img");

if(heroImage){

const hero =
document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

const rect =
hero.getBoundingClientRect();

const x =
e.clientX-rect.left;

const y =
e.clientY-rect.top;

const rotateY =
((x/rect.width)-0.5)*18;

const rotateX =
((y/rect.height)-0.5)*-18;

heroImage.style.transform=

`
perspective(1200px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.04)

`;

});

hero.addEventListener("mouseleave",()=>{

heroImage.style.transform=

`
perspective(1200px)

rotateX(0)

rotateY(0)

scale(1)

`;

});

}

//==================================================
// CONTATO FORMULÁRIO
//==================================================

const form = document.querySelector("form.contact-form");

const status = document.querySelector("#form-status");


if(form){

form.addEventListener("submit", async (e)=>{

    e.preventDefault();


    const button = form.querySelector("button");


    button.disabled = true;

    button.innerHTML =
    "Enviando...";


    const data = new FormData(form);


    try{


        const controller = new AbortController();


        const timeout = setTimeout(()=>{

            controller.abort();

        },10000);



        const response = await fetch(

            form.action,

            {

                method:"POST",

                body:data,

                headers:{

                    "Accept":"application/json"

                },

                signal:controller.signal

            }

        );


        clearTimeout(timeout);



        if(response.ok){


            button.innerHTML =
            "Enviado ✓";


            if(status){

                status.innerHTML =
                "Mensagem enviada com sucesso!";

            }


            form.reset();



        }else{


            button.innerHTML =
            "Erro";


            if(status){

                status.innerHTML =
                "Não foi possível enviar.";

            }


        }



    }catch(error){


        console.log(error);


        button.innerHTML =
        "Tentar novamente";


        if(status){

            status.innerHTML =
            "Erro de conexão. Verifique o formulário.";

        }


    }



    button.disabled = false;


});


}