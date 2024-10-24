$(document).ready(function() {
    // Cargar la página principal por defecto
    $("#content").load("pages/home.html");

    // Manejar los clics en los enlaces del menú para cargar el contenido correspondiente
    $("#navbar").click(function(e) {
        e.preventDefault();
        let page = $(this).attr("href");

        // Cargar la página según el enlace seleccionado
        if (page === "/compra_nuevos.html") {
            $("#content").load("/pages/compra_nuevos.html");
        } else if (page === "/compra_usados.html") {
            $("#content").load("/pages/compra_usados.html");
        } else if (page === "/remates.html") {
            $("#content").load("/remates.html");
        }else if (page === "/arriendos.html") {
            $("#content").load("/pages/arriendos.html");
        } else {
            $("#content").load("/contact.html");
        }
        
    });
    
});
