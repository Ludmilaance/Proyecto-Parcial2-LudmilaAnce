   //COKIE
   document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookiesBtn = document.getElementById("acceptCookies");

    let cookiesAccepted = false;

    
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookiesAccepted = true;
        cookieBanner.style.display = "none";
    } else {
        
        cookieBanner.style.display = "block";
    }

    
    acceptCookiesBtn.addEventListener("click", () => {
        cookiesAccepted = true;
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
        enableScrolling();
    });

    
    function disableScrolling() {
        document.body.style.overflow = "hidden";
    }

    
    function enableScrolling() {
        document.body.style.overflow = "";
    }

   
    window.addEventListener("scroll", () => {
        if (!cookiesAccepted) {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            if (scrollPosition > pageHeight / 2) {
                disableScrolling();
            }
        }
    });
});

 // Función para mostrar el contenido al hacer clic en el botón
 document.getElementById('showContentButton')?.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.style.display = 'block';
});