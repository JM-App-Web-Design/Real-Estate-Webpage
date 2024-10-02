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
