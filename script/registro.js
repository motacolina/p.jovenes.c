document.getElementById("apartado").addEventListener("submit", function (event) { 
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("email").value;
    const password = document.getElementById("contra").value;
    const genero = document.getElementById("sexo").value;
    const fecha = document.getElementById("fecha").value;
    const documento = document.getElementById("docum").value;

    const modelo ={
        nombre: nombre,
        apellido: apellidos,
        correo: correo,
        password: password,
        genero: genero,
        fecha: fecha,
        documento: documento
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(modelo));

    window.location.href ="../html/usuario.html";
});
    
    
    
