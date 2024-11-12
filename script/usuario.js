document.getElementById_("apartado").addEventListener("submit", function (event) { event.preventDefault();

    const emailLogin = document.getElementById("emailLogin").value;
    const passLogin = document.getElementById("passLogin").value;
    const = usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
    
    if (usuarioRegistrado.correo===emailLogin && usuarioRegistrado.contrasena === passLogin){
        localStorage.setItem("nombreUsuario", usuarioRegistrado.nombre);
        window.location.href="saludo.html";
    }else{
        alert("Correo o contraseña incorrectos");
    }
});
    