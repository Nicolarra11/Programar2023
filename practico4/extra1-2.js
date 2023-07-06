/*
EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
código para su correcta utilización.
*/
const readlineSync = require('readline-sync');

const opcion_piedra = "piedra";
const opcion_papel = "papel";
const opcion_tijeras = "tijeras";

function obtenerJugadaComputadora() {
  const opciones = [opcion_piedra, opcion_papel, opcion_tijeras];
  const i = Math.floor(Math.random() * 3);
  const jugada = opciones[i];
  return jugada;
}

function obtenerJugadaUsuario() {
  const eleccion = readlineSync.question('Ingresa tu jugada! (piedra, papel o tijeras): ');
  return eleccion.toLowerCase();
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return "Empate";
  } else if (
    (jugadaComputadora === opcion_piedra && jugadaUsuario === opcion_tijeras) ||
    (jugadaComputadora === opcion_papel && jugadaUsuario === opcion_piedra) ||
    (jugadaComputadora === opcion_tijeras && jugadaUsuario === opcion_papel)
  ) {
    return "Gana la IA :(";
  } else {
    return "Ganaste! :D";
  }
}



/*
EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
juego, es decir:
● Una jugada: gana el ganador de esa única jugada.
● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
el usuario gane una jugada y la computadora la otra.
● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.
*/



function jugar(numJugadas) {
  let contadorUsuario = 0;
  let contadorComputadora = 0;

  for (let i = 1; i <= numJugadas; i++) {
    console.log(`Jugada numero ${i}:`);

    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();
    const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    console.log('La computadora eligió: '+ [jugadaComputadora]+', El usuario eligió: '+[jugadaUsuario]+', El resultado fue: '+[resultado]);

    if (resultado === "Ganaste! :D") {
      contadorUsuario++;
    } else if (resultado === "Gana la IA :(") {
      contadorComputadora++;
    }

    if (contadorUsuario === Math.ceil(numJugadas / 2) || contadorComputadora === Math.ceil(numJugadas / 2)) {
      break;
    }
  }

  if (contadorUsuario > contadorComputadora) {
    console.log("¡Ganaste! :D!");
  } else if (contadorUsuario < contadorComputadora) {
    console.log("¡Gana la IA :(!");
  } else {
    console.log("¡Empate!");
  }
}


const numJugadas = parseInt(readlineSync.question('Ingresa cuantas partidas queres jugar: '));

jugar(numJugadas);