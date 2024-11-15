document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');
            
            if (href === "#") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                event.preventDefault();
            } else if (href === "") {                
                event.preventDefault();
                window.alert("Sitio web en construcción, disculpe las molestias");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('togglePeliculas');
    const pelis1 = document.getElementById('pelis1');
    const pelis2 = document.getElementById('pelis2');
    
    toggleButton.addEventListener('click', function() {
        if (pelis1.style.display === 'none') {
            pelis1.style.display = 'flex';
            pelis2.style.display = 'none';
            toggleButton.textContent = 'Mostrar más películas';
        } else {
            pelis1.style.display = 'none';
            pelis2.style.display = 'flex';
            toggleButton.textContent = 'Mostrar anteriores';
        }
    });
});
