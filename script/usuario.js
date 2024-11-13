document.getElementById("inf-ppal").addEventListener("submit", function (event) { 
    event.preventDefault();

    const emailLogin = document.getElementById("envio").value;
    const passLogin = document.getElementById("contra").value;
    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
    
    if ( usuarioRegistrado.correo === emailLogin && usuarioRegistrado.password === passLogin){
        
        localStorage.setItem("nombreUsuario", usuarioRegistrado.nombre);

        window.location.href="/html/saludo.html";
    } else{
        alert("Correo o contraseña incorrectos");
    }
});
    