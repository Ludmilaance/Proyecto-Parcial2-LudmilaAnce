/* https://magicloops.dev/es */
function enviarMail(email, nombre, mensaje) {
    // Por si necesito usar letrs o simbolos raros
    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const mensajeEncoded = encodeURIComponent(mensaje);
 //Ahora necesitamos la url de la api junto a los valores codificados
 //La api la cree en magicloops.dev y envia el mail a mi casilla personal.
    const url = `https://magicloops.dev/api/loop/run/619a8482-a1a5-4463-836f-9d22188585e1?email=${emailEncoded}&nombre=${nombreEncoded}&mensaje=${mensajeEncoded}`;
    
    fetch(url)//Envia una peticion a la api
        .then(response => {
            setTimeout(function () {
                alert("¡Gracias por ponerte en contacto con nosotros!");
            }, 1000);
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data); // Esperemos que sea un mensaje de ok y estatus 200 jaja
            return true;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            return 0;
        });
}
function enviarCorreo(){
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("name").value;
    const mensaje = document.getElementById("message").value;
    const check = document.getElementById("agreement");
    console.log(email,usuario,mensaje);
    if(check.checked){
        enviarMail(email,usuario,mensaje);
    }
    return false;
}
/* enviarMail('prueba@pruebafacu.com', 'Facu', 'Romero', 'Hola curso, es una prueba'); */