document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("viewmode");
    const menu = document.getElementById("menu");
    const body = document.getElementById("main");
    const menubutton = document.getElementById("menubutton");
    const hiddennav = document.getElementById("hiddennav");
    const timeline = document.getElementById("timeline");
    const onTimelinePage = window.location.pathname.endsWith("timeline.html");


    img.addEventListener("click", function() {
        img.style.opacity = 0;
        menu.style.opacity = 0;

        setTimeout(() => {
            const isLightMode = img.src.includes("clear_day_black.png");

            if (isLightMode) {
                img.src = "bedtime_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
                menu.src = "menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
                if (!onTimelinePage) {
                    timeline.src = "Timelinewhite.png";
                }
                body.classList.add("dark");
            } else {
                img.src = "clear_day_black.png";
                menu.src = "menu_black.png";
                body.classList.remove("dark");
            }


            img.style.opacity = 1;
            menu.style.opacity = 1;
        }, 200);
    });

    menu.addEventListener("click", function() {
        menu.style.opacity = 0;

        setTimeout(() => {
            const isDarkMode = body.classList.contains("dark");
            const isMenuOpen = menu.src.includes("close");

            if (isMenuOpen) {
                menu.src = isDarkMode
                    ? "menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
                    : "menu_black.png";
            } else {
                menu.src = isDarkMode
                    ? "close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
                    : "close_black.png";
            }

            menu.style.opacity = 1;
        }, 200);
    });

    menubutton.addEventListener("click", () => {
        hiddennav.classList.toggle("show");
    });

        // Fade-in on scroll (trigger once)
    const fadeElements = document.querySelectorAll("section, .fade-in");

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // only fade in once
            }
        });
    }, {
        threshold: 0.2 // start fading in when 20% of the element is visible
    });

    fadeElements.forEach(el => fadeObserver.observe(el));

});
