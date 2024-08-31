import { GestorDeTurnos } from './class/00GestionDeTurnos.js';
import { Guerrero } from './class/Guerrero.js';
import { Sanador } from './class/Sanador.js';
import { Hechicero } from './class/Hechicero.js';

const Yeffer = new Guerrero({ nombre: "Yeffer", iniciativa: 10 });
const Arley = new Hechicero({ nombre: "Arley", iniciativa: 8 });
const Walter = new Sanador({ nombre: "Walter", iniciativa: 9 });
let a = 20


GestorDeTurnos.agregarPersonaje(Yeffer);
GestorDeTurnos.agregarPersonaje(Arley);
GestorDeTurnos.agregarPersonaje(Walter);

GestorDeTurnos.iniciar();


console.log(Yeffer)

