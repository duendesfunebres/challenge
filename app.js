let titulo = document.querySelector('h1');
titulo.innerHTML = "Elige al Amigo Secreto";

let segundotitulo = document.querySelector('h2');
segundotitulo.innerHTML = "Ingrese un nombre y clickear el botón";

let listaDeNombres = [];
listaDeNombres.push('null');

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if (nombre === "") {
        alert("EL NOMBRE INGRESADO ES INVÁLIDO");
        document.getElementById('amigo').focus();
    } else {
        listaDeNombres.push(nombre);
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();

        let li = document.createElement('li');
        li.textContent = nombre;
        document.getElementById('listaAmigos').appendChild(li);
    }
}

function sortearAmigo() {
    let valor2 = generarAmigo();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo seleccionado es "${listaDeNombres[valor2]}"`;
    ejecutarCelebracion();
    setTimeout(() => {
        vaciarLista();
    }, 10000);




    const nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo) {
        const lista = document.getElementById('listaAmigos');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreAmigo;
        lista.appendChild(nuevoElemento);
        document.getElementById('amigo').value = '';
    }
}

function generarAmigo() {
    const lista = document.getElementById('listaAmigos');
    const cantidad = lista.children.length;
    console.log(`cantidad = ${cantidad}`);
    const valor = Math.floor(Math.random() * cantidad + 1);
    console.log(`valor = ${valor}`);
    return valor;
}

function vaciarLista() {
    let vaciar = document.getElementById('resultado');
    vaciar.innerHTML = "";

    let lista = document.getElementById('listaAmigos');
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    document.getElementById('amigo').focus();
}

//--------------------------------------------------------------------------------------
//A partir de acá código generado por IA, para ejecutar la caida de CONFETTI, como festejo al terminar

function ejecutarCelebracion() {
    for (let i = 1500; i > 0; i--) {
        crearConfeti();
    }

}

function crearConfeti() {
    const confeti = document.createElement('div');
    confeti.className = 'confeti';
    confeti.style.left = Math.random() * 100 + 'vw';
    confeti.style.width = Math.random() * 10 + 5 + 'px'; // Tamaños de confeti variados
    confeti.style.height = confeti.style.width;
    confeti.style.backgroundColor = obtenerColorAleatorio();
    confeti.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Duración de la animación aleatoria
    confeti.style.animationDelay = Math.random() + 's'; // Retraso aleatorio en el inicio de la animación
    document.body.appendChild(confeti);

    setTimeout(() => {
        confeti.remove();
    }, 10000); // Aumenta el tiempo para asegurar que se remuevan todos los confetis

}

function obtenerColorAleatorio() {
    const colores = ['#ff69b4', '#ff4500', '#1e90ff', '#32cd32', '#ffff00'];
    return colores[Math.floor(Math.random() * colores.length)];
}

