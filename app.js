// app.js

function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.log("Error loading page:", error));
}

/* function loadService(service) {
    fetch(`pages/${service}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.log("Error loading page:", error));
} */

// app.js

// Cargar inmuebles desde el servidor
/* function loadInmuebles() {
    fetch('http://localhost:3000/inmuebles')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards-section .row');
            cardsContainer.innerHTML = ''; // Limpiar el contenido anterior

            data.forEach(inmueble => {
                const cardHTML = `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${inmueble.imagen}" class="card-img-top" alt="${inmueble.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${inmueble.titulo}</h5>
                                <p class="card-text">${inmueble.descripcion}</p>
                                <p class="card-text">Precio: ${inmueble.precio}</p>
                                <a href="#" class="btn btn-primary">Ver Detalles</a>
                            </div>
                        </div>
                    </div>
                `;
                cardsContainer.innerHTML += cardHTML;
            });
        })
        .catch(error => console.error('Error cargando inmuebles:', error));
}

window.onload = loadInmuebles; */

