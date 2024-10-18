//obtiene el numero del box:
function redirigir() {
    var numero = document.getElementById("busquedaRapidaLinea").value;
    var paginas = {
        1: document.getElementById("linea1"),
        2: "linea2.html",
        3: "linea3.html",
        4: "linea4.html",
        5: "linea5.html",
        6: "linea6.html",
        7: "linea7.html",
        8: "linea8.html",
        9: "linea9.html",
        10: "linea10.html",
        11: "linea11.html",
        12: "linea12.html",
        13: "linea13.html",
        14: "linea14.html",
        15: "linea15.html",
        26: "linea26.html",
        28: "linea28.html",
        91: "linea91.html",
        92: "linea92.html",
        93: "linea93.html",
        94: "linea94.html",
        95: "linea95.html",
        96: "linea96.html",
        97: "linea97.html",
        98: "linea98.html",
        99: "linea99.html",
        699: "linea699.html"
    };
    
    var lista = document.getElementById("mainPage");
    lista.style.display = "none";
    paginas[numero].style.display = "block";
}

function redirigirMetropolitano(){
    window.location.href = "https://salamanca.avanzagrupo.com/lineas-y-horarios/todas-las-lineas"
}

function redirigirViajes(){
    window.location.href = "https://www.estacionautobusessalamanca.es/servicios-de-la-estacion-de-autobuses-de-salamanca"
}


function nuevaLinea(linea) {
    localStorage.setItem("linea", linea); // Guarda el número de línea en localStorage
    window.location.href = "lineas.html";
}

function nuevaVariante1(numeroVariante, numeroLinea) {
    var variantes;
    
    if (numeroLinea == 1) {
        variantes = {
            1: document.getElementById("linea1variante1"),
            2: document.getElementById("linea1variante2"),
        };
    } else if (numeroLinea == 7) {
        // Aquí puedes definir las variantes de la línea 7
        variantes = {
            // Define las variantes de línea 7
        };
    }

    if (variantes) {
        for (var i in variantes) {
            variantes[i].style.display = "none";
        }
        
        // Luego, muestra la variante seleccionada
        if (variantes[numeroVariante]) {
            variantes[numeroVariante].style.display = "block";
        }
    }
}

window.onload = function() {
    var linea = localStorage.getItem("linea");
    var lineamostrar;
    if (linea) {
        var lineasBuses = {
            1: document.getElementById("linea1"),
            2: document.getElementById("linea2"),
            // Añade más líneas según sea necesario
        };

        if (linea == 1){
            lineamostrar = document.getElementById("linea1variante1");
        } 

        

        if (lineasBuses[linea]) {
            lineasBuses[linea].style.display = "block";
            lineamostrar.style.display = "block";
        }

    }
}
