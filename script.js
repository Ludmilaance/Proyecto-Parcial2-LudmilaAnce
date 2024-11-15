function handleFormSubmit(event) {
    event.preventDefault();

    const checkbox = document.getElementById("agreement");
    if (!checkbox.checked) {
        alert("Por favor, acepta los términos y condiciones.");
        return;
    }

    const dateInput = document.getElementById("date");
    const dateStatus = document.getElementById("date-status");
    const selectedDate = new Date(dateInput.value);
    const currentDate = new Date();
    
//zona horaria de Argentina
    const timezoneOffset = -3 * 60; 
    currentDate.setMinutes(currentDate.getMinutes() + currentDate.getTimezoneOffset() - timezoneOffset);

    if (!dateInput.value) {
        dateStatus.textContent = "Por favor selecciona una fecha.";
        return;
    }

    if (selectedDate < currentDate) {
        dateStatus.textContent = "La fecha seleccionada ya pasó.";
        dateStatus.style.color = "red";
    } else if (selectedDate > currentDate) {
        dateStatus.textContent = "La fecha seleccionada es futura.";
        dateStatus.style.color = "green";
    } else {
        dateStatus.textContent = "La fecha seleccionada es hoy.";
        dateStatus.style.color = "blue";
    }

    // Mostrar mensaje de éxito después de 3 segundos
    setTimeout(function () {
        alert("¡Gracias por ponerte en contacto con nosotros!");
        window.location.href = "index (1).html";
    }, 3000);
}

// Actualizar el estado de la fecha cuando cambie el valor del input
document.getElementById("date").addEventListener("change", () => {
    const dateInput = document.getElementById("date");
    const dateStatus = document.getElementById("date-status");
    const selectedDate = new Date(dateInput.value);
    const currentDate = new Date();
    
    // Establecer la zona horaria de Argentina
    const timezoneOffset = -3 * 60; 
    currentDate.setMinutes(currentDate.getMinutes() + currentDate.getTimezoneOffset() - timezoneOffset);

    if (!dateInput.value) {
        dateStatus.textContent = "Por favor selecciona una fecha.";
        return;
    }

    if (selectedDate < currentDate) {
        dateStatus.textContent = "La fecha seleccionada ya pasó.";
        dateStatus.style.color = "red";
    } else if (selectedDate > currentDate) {
        dateStatus.textContent = "La fecha seleccionada es futura.";
        dateStatus.style.color = "green";
    } else {
        dateStatus.textContent = "La fecha seleccionada es hoy.";
        dateStatus.style.color = "blue";
    }
});
          


//  formulario de inicio de sesión
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close");
    const loginForm = document.getElementById("loginForm");


    loginBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        
        const userRole = prompt("Introduce tu rol (admin, usuario):").toLowerCase();

        switch (userRole) {
            case "admin":
                window.location.href = "admin.html"; 
            case "usuario":
                window.location.href = "usuario.html";
                break;
            default:
                alert("Rol no reconocido. Por favor, ingresa un rol válido.");
                break;
        }

        
        modal.style.display = "none";
    });




    
});

 
    // Mostrar la pantalla de carga
    
    window.addEventListener('load', () => {
        
        const loadingScreen = document.getElementById('loading-screen');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            
            const content = document.getElementById('content');
            content.style.display = 'block';
        }, 1000); 
    });
    
   

