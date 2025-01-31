function buscar() {
    const busqueda = document.getElementById('buscar').value.toLowerCase();

    
    const paginas = {
        "debi tirar mas fotos": "./Bad Bunny/Debi tirar mas fotos.html",
        "feliz navidad": "./Arcangel/feliz navidad.html",
        "papi arca": "./Arcangel/Papi Arca.html",
       

      


    };

    if (paginas[busqueda]) {
        
        window.location.href = paginas[busqueda];
    } else {
        alert("⚠⚠ No se encontró el resultado de su busqueda....");
       
    }

}



