/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        },1000);

    }

});

/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    if(cursor){

        cursor.style.left =
        e.clientX + "px";

        cursor.style.top =
        e.clientY + "px";

    }

});

/* =========================================
   CURSOR HOVER EFFECT
========================================= */

const hoverElements =
document.querySelectorAll(
"a,button,.watch-card,.gallery-item"
);

hoverElements.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(cursor){

            cursor.style.transform =
            "translate(-50%,-50%) scale(2)";

        }

    });

    item.addEventListener("mouseleave",()=>{

        if(cursor){

            cursor.style.transform =
            "translate(-50%,-50%) scale(1)";

        }

    });

});

/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
document.querySelectorAll("[data-target]");

const startCounter = () => {

    counters.forEach(counter=>{

        const target =
        +counter.dataset.target;

        let count = 0;

        const updateCounter = () => {

            const increment =
            target / 200;

            count += increment;

            if(count < target){

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(
                    updateCounter
                );

            }else{

                counter.innerText =
                target;

            }

        };

        updateCounter();

    });

};

const statsSection =
document.querySelector(".stats");

if(statsSection){

    const observer =
    new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    startCounter();

                }

            });

        },

        {
            threshold:0.5
        }

    );

    observer.observe(statsSection);

}

/* =========================================
   STICKY HEADER
========================================= */

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 100){

        header.classList.add(
            "sticky-header"
        );

    }else{

        header.classList.remove(
            "sticky-header"
        );

    }

});

/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
document.querySelectorAll(

    ".section-title,\
     .watch-card,\
     .product-card,\
     .timeline-item,\
     .material-card,\
     .performance-box,\
     .faq-item"

);

const revealObserver =
new IntersectionObserver(

    entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add(
                    "active-reveal"
                );

            }

        });

    },

    {
        threshold:.2
    }

);

revealElements.forEach(el=>{

    revealObserver.observe(el);

});

/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    item.addEventListener("click",()=>{

        item.classList.toggle("open");

    });

});

/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    );

});

/* =========================================
   LIGHTBOX
========================================= */

const galleryImages =
document.querySelectorAll(
".gallery-item img"
);

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(
".lightbox-image"
);

const closeLightbox =
document.querySelector(
".close-lightbox"
);

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add(
            "active"
        );

        lightboxImage.src =
        image.src;

    });

});

if(closeLightbox){

    closeLightbox.addEventListener(

        "click",

        ()=>{

            lightbox.classList.remove(
                "active"
            );

        }

    );

}

/* =========================================
   NEWSLETTER
========================================= */

const newsletterButton =
document.querySelector(
".newsletter button"
);

if(newsletterButton){

    newsletterButton.addEventListener(

        "click",

        ()=>{

            const email =
            document.querySelector(
                ".newsletter input"
            ).value;

            const regex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(regex.test(email)){

                alert(
                  "عضویت با موفقیت انجام شد"
                );

            }else{

                alert(
                  "ایمیل معتبر وارد کنید"
                );

            }

        }

    );

}

/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener(
"scroll",
()=>{

    const scrolled =
    window.pageYOffset;

    const hero =
    document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY =
        scrolled * 0.5 + "px";

    }

});

/* =========================================
   PRODUCT FILTER
========================================= */

const filterButtons =
document.querySelectorAll(
".collection-filter button"
);

filterButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        filterButtons.forEach(b=>{

            b.classList.remove("active");

        });

        btn.classList.add("active");

    });

});

/* =========================================
   ANIMATED NUMBERS
========================================= */

const animateValue = (

    element,
    start,
    end,
    duration

)=>{

    let startTime = null;

    const step = (timestamp)=>{

        if(!startTime){

            startTime = timestamp;

        }

        const progress =
        Math.min(

            (timestamp - startTime)

            / duration,

            1

        );

        element.textContent =
        Math.floor(

            progress *

            (end - start)

            + start

        );

        if(progress < 1){

            requestAnimationFrame(step);

        }

    };

    requestAnimationFrame(step);

};

/* =========================================
   ACTIVE MENU
========================================= */

const currentPage =
window.location.pathname
.split("/")
.pop();

document
.querySelectorAll("nav a")
.forEach(link=>{

    if(

        link.getAttribute("href")

        === currentPage

    ){

        link.classList.add("active");

    }

});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".main-header nav");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}

document.querySelectorAll(".main-header nav a")
.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});