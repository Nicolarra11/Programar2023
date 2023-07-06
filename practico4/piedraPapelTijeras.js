/* 
PIEDRA-PAPEL-TIJERAS

El objetivo de este práctico es desarrollar un programa sencillo en JavaScript que permite jugar
al famoso juego de "Piedra, Papel o Tijeras" contra la computadora.

Descripción:
El juego de "Piedra, Papel o Tijeras" es un juego de manos en el que dos jugadores eligen entre
tres opciones: piedra, papel o tijeras. Las reglas son las siguientes:
- La piedra vence a las tijeras.
- Las tijeras vencen al papel.
- El papel vence a la piedra.

El programa que desarrollarás permitirá al usuario jugar contra la computadora. La computadora
elegirá una opción de forma aleatoria, y el usuario podrá ingresar su elección a través de la
consola. El programa determinará el ganador y mostrará el resultado por pantalla.


Pasos a seguir:

1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.


2. Crea una función llamada obtenerJugadaComputadora que generará un número
aleatorio entre 0 y 2 para representar las opciones:
- 0 para "piedra",
- 1 para "papel" y
- 2 para "tijeras"
Siempre utilizando los valores de strings y no los valores númericos.
*/

function obtenerJugadaComputadora() {
    const opcion = {
      0: "piedra",
      1: "papel",
      2: "tijeras"
    };
  
    const i = Math.floor(Math.random() * 3);
    const jugada = opcion[i];
    return jugada;
}


/*
3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
*/

const readlineSync = require('readline-sync');

function obtenerJugadaUsuario() {
  const eleccion = readlineSync.question('Ingresa tu jugada! (piedra, papel o tijeras): ');
  return eleccion.toLowerCase();
}


/*
4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.
*/

function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
      return "Empate";
    } 
    else if (
      (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
      (jugadaComputadora === "papel" && jugadaUsuario === "piedra")   ||
      (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")
    ) {
      return "Gana la IA :(";
    } 
    else {
      return "Ganaste! :D";
    }
}


/*
5. Llama a las funciones en el orden adecuado para ejecutar el juego:
*/

//a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.
const jugadaComputadora = obtenerJugadaComputadora();

//b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
const jugadaUsuario = obtenerJugadaUsuario();

// c) Invoca la función determinarGanador pasando como argumentos las jugadas de la computadora y del usuario. Almacena el resultado en una variable.
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

/*
6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
(quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
resultado:

La computadora eligio: [jugadaComputadora]. El usuario eligio: [jugadaUsuario].
El resultado fue: [Empate | Gana la computadora | Gana el usuario].
*/


console.log('La computadora eligió: '+ [jugadaComputadora] + ', El usuario eligió: ' + [jugadaUsuario] + ', El resultado fue: ' + [resultado]);





///////////////////////////////////////////////////////////////////////////////////////////////////

