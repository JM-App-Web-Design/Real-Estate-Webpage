// app.js

function loadPage(page) {
    fetch(`pages/${page}.html`)
    .then((response) => response.text())
    .then((data) => {
    document.getElementById("navbar").innerHTML = data;
    document.getElementById("content").innerHTML = data;
    document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.log("Error loading page:", error));
}

function loadContent() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("myContent").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "content.html", true);
    xhttp.send();
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
