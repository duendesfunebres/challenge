// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let titulo = document.querySelector('h1');
titulo.innerHTML = "Elige al Amigo Secreto";

let segundotitulo = document.querySelector('h2');
segundotitulo.innerHTML = "Ingrese un nombre y dele click al botón";

let listaDeNombres = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if (nombre == "") {
        alert("EL NOMBRE INGRESADO ES INVÁLIDO");
        document.getElementById('amigo').focus();
    } else {
        listaDeNombres.push(nombre);
        console.log(listaDeNombres);
        document.getElementById('amigo').value = ""
        document.getElementById('amigo').focus();

        let li = document.createElement('li');
        li.textContent = nombre;
        document.getElementById('listaAmigos').appendChild(li);
        return;
    }
    return;
}

function sortearAmigo() {
    let valor2 = generarAmigo()
    console.log(`fui y volvi y logre esto:  ${valor2}`)
    return
}

function generarAmigo() {
    const lista = document.getElementById('listaAmigos');
    const cantidad = lista.children.length; //lista.childElementCount; // O lista.children.length
    console.log(`generar Amigo ${cantidad}`);
    const valor = Math.floor(Math.random() * (cantidad) + 1);
    console.log(`estoy dentro y valor es igual a: ${valor}`)
    return valor;
}

function vaciarLista() {
    let lista = document.getElementById('listaAmigos');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}


