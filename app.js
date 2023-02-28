//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que seleccionó una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
}

//Se generan todas las barras
let elementos = document.getElementsByClassName("barra");
for(var e = 0; e<elementos.length;e++){
    crearBarra(elementos[e])
}

let porcentajes = document.getElementsByClassName("porcentaje");

//esta variable se utiliza de bandera para saber si ya ejecutó la animacion
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;

        for(var i = 0;i<elementos.length;i++){
            porcentaje_convertido = parseFloat(porcentajes[i].innerHTML);
            //pintarBarra(elementos[i], Math.round(porcentaje_convertido*17), i, interval);
            move(elementos[i],0,Math.floor(porcentaje_convertido));
        }
    }
}

function move(id_barra, i, limite){
    if(i == 0){
        i = 1;
        var elem = id_barra.getElementsByClassName("e")[0];
        var width = 10;
        var id = setInterval(frame, 10);
        function frame(){
            if(width>= limite){
                clearInterval(id);
                id = 0;
            } else{
                width++;
                elem.style.width = width + "%";
                // elem.innerHTML = width + "%";
            }
        }
    }
}

//se detecta el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}