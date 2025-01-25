// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSeleccionados = [];
let lista = document.querySelector('#listaAmigos');
let seleccionado = document.querySelector('#resultado');

//limpia el cuadro de texto
function limpiarCuadro() {
    document.querySelector('#amigo').value = ''
}

//Borra la lista mostrada en pantalla
function actualizarLista() {
    lista.innerHTML = ''
}

//crea un elemento con el nombre marcado y el texto, lo hice por si en un futuro necesito crear mas elementos
function crearElemento(elemnto, texto) {
    let variable = document.createElement(elemnto);
    variable.textContent = texto;
    return variable;
}

//Agrega un amigo en la lista
function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    
    //verifica si el usuario ingrso un nombre o lo dejo en blanco
    if (amigo === ''){
        alert("Por favor, ingresa un nombre");
        limpiarCuadro();
    }else{
        //agrega el nombre que el usuario proporciono a la lista
        amigosSeleccionados.push(amigo);
        limpiarCuadro();
        actualizarLista();

        //muestra en pantalla la lista de amigos q va seleccionando
        for (let i = 0; i < amigosSeleccionados.length; i++) {
            let li = crearElemento('li', amigosSeleccionados[i]);
            lista.appendChild(li);
        };
    }
};

function sortearAmigo(){
    //verifica si el usuario ingreso un nombre 
    if (amigosSeleccionados.length < 2){
        alert('Debes ingresar al menos dos nombre antes de sortear.')
    }else{
        actualizarLista();
        //elige una persona aleatoria y la muestra en pantalla
        let personaSeleccionada = Math.floor(Math.random()*amigosSeleccionados.length);
        let mensaje = document.querySelector('#resultado');
        mensaje.innerHTML = `La persona seleccionada es ${amigosSeleccionados[personaSeleccionada]}.`;
        //limpia la lista para q el usuario tenga q ingresar nuevos nombres
        amigosSeleccionados = [];
    }
    
}



    



