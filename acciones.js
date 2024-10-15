//obtiene el numero del box:
function redirigir() {
    var numero = document.getElementById("introducir").value;
    var paginas = {
        1: "lineas/linea1.html",
        2: "lineas/linea2.html",
        3: "lineas/linea3.html",
        4: "lineas/linea4.html",
        5: "lineas/linea5.html",
        6: "lineas/linea6.html",
        7: "lineas/linea7.html",
        8: "lineas/linea8.html",
        9: "lineas/linea9.html",
        10: "lineas/linea10.html",
        11: "lineas/linea11.html",
        12: "lineas/linea12.html",
        13: "lineas/linea13.html",
        14: "lineas/linea14.html",
        15: "lineas/linea15.html",
        26: "lineas/linea26.html",
        28: "lineas/linea28.html",
        91: "lineas/linea91.html",
        92: "lineas/linea92.html",
        93: "lineas/linea93.html",
        94: "lineas/linea94.html",
        95: "lineas/linea95.html",
        96: "lineas/linea96.html",
        97: "lineas/linea97.html",
        98: "lineas/linea98.html",
        99: "lineas/linea99.html",
        699: "lineas/linea699.html"
    };
    

    if (paginas[numero]) {
        window.location.href = paginas[numero];
    } else {
        alert("Número no válido. Introduce un número válido.");
    }
}