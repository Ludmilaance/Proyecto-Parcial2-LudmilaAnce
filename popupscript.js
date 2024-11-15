// Mostrar el popup después de 3 segundos
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('popup').style.display = 'flex';
    }, 3000); 
});


document.addEventListener('click', (event) => {
    if (event.target.matches('.popup-close') || event.target.matches('.popup-close-button')) {
        document.getElementById('popup').style.display = 'none';
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    alert('Buscando: ' + query);
});
  