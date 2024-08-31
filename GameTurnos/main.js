class GestorDeTurnos {
    static personajes = [];
    static indiceTurnoActual = 0;

    static agregarPersonaje(personaje) {
        this.personajes.push(personaje);
        this.personajes.sort((a, b) => b.velocidad - a.velocidad); 
    }

    static esTurno(jugador) {
        if (this.personajes[this.indiceTurnoActual] !== jugador) {
            console.log(`No es tu turno, ${jugador.nombre}. Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
            return false;
        }
        return true;
    }

    static finalizarTurno() {
        this.indiceTurnoActual = (this.indiceTurnoActual + 1) % this.personajes.length;
        console.log(`Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
    }

    static iniciarPartida() {
        console.log(`Comienza la partida. Es el turno de ${this.personajes[this.indiceTurnoActual].nombre}`);
        
    }
}

class Jugador {
    // Contador estático para generar IDs únicos
    static idContador = 1;

    constructor({ nombre, velocidad }) {
        // Asignar un ID único al jugador
        this.id = Jugador.idContador++;
        this.nombre = nombre;
        this.vida = 100;
        this.ataque = 0;
        this.defensa = 0;
        this.energia = 100;
        this.velocidad = velocidad; 
    }
    
    estaFueraDeCombate(objetivo = false) {
        if (objetivo.vida <= 0 || this.vida <= 0) {
            console.log(`Estás intentando interactuar con personajes fuera de combate`);
            return true;
        }
        return false;
    }
    
    atacar(objetivo) {
        if (this.estaFueraDeCombate(objetivo)) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
  
        if (this.ataque > objetivo.defensa) {
            objetivo.vida = objetivo.vida - (this.ataque - objetivo.defensa);
  
            if (objetivo.vida < 0) {
                objetivo.vida = 0;
            }
        } else {
            console.log(
                `Tu ataque es de ${this.ataque} y la defensa del objetivo es mayor, es de ${objetivo.defensa}, no le causas daño`
            );
        }

        
        
        GestorDeTurnos.finalizarTurno(); 
        UpdateInfo(this , objetivo)

    }
}

class Guerrero extends Jugador {
    constructor({ nombre, velocidad }) {
        super({ nombre, velocidad });
        this.cargaEspecial = 0;
        this.ataque = 60;
        this.defensa = 40;
    }

    atacar(objetivo) {
        super.atacar(objetivo);
        if (this.cargaEspecial++ === 2) {
            this.ataque += 10;
            this.cargaEspecial = 0;
        }
    }

    fortificar(objetivo) {
        if (this.estaFueraDeCombate()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
        
        this.defensa += 15;
        this.energia -= 30;
        objetivo.defensa += 15;
        

        UpdateInfo(this, objetivo)
        GestorDeTurnos.finalizarTurno(); 
    }
    
    furiaBerserker(objetivo) {
        if (this.estaFueraDeCombate(objetivo)) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
        
        let diferencia = this.ataque - objetivo.defensa;
        if (diferencia >= 30) {
            objetivo.vida = 0;
            this.energia -= 70;
        }
        
        UpdateInfo(this , objetivo)
        GestorDeTurnos.finalizarTurno(); 
    }
}

class Sanador extends Jugador {
    constructor({ nombre, velocidad }) {
        super({ nombre, velocidad });
        this.cargaEspecial = 1;
        this.ataque = 40;
        this.defensa = 60;
    }
    
    curar(objetivo) {
        if (this.estaFueraDeCombate()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
        
        objetivo.vida += 30;
        this.energia -= 30;
        if (objetivo.vida > 100) {
            objetivo.vida = 100;
        }
        
        GestorDeTurnos.finalizarTurno(); 
        UpdateInfo(this , objetivo)

    }
    
    sacrificio(objetivo) {
        if (this.estaFueraDeCombate()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
        
        let cantidad = 100 - objetivo.vida;
        if (cantidad < this.vida) {
            objetivo.vida += cantidad;
            this.vida -= cantidad;
            this.energia -= 70;
        } else {
            objetivo.vida += this.vida;
            this.vida = 1;
            this.energia -= 70;
        }
        
        GestorDeTurnos.finalizarTurno(); 
        UpdateInfo(this , objetivo)

    }
    
    resucitar(objetivo) {
        if (this.cargaEspecial == 0) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
        if (this.vida === 0) return false;  
        if (objetivo.vida > 0) return false;            
        
        objetivo.vida = 40;
        this.energia -= 70;
        this.cargaEspecial = 0;
        
        GestorDeTurnos.finalizarTurno(); 
        UpdateInfo(this , objetivo)

    }
}

class Hechicero extends Jugador {
    constructor({ nombre, velocidad }) {
        super({ nombre, velocidad });
        this.cargaEspecial = 1;
        this.ataque = 70;
        this.defensa = 30;
    }
    
    potenciar(objetivo) {
        if (this.estaFueraDeCombate()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
        
        objetivo.ataque += 10;
        objetivo.defensa += 10;
        this.energia -= 30;
        
        GestorDeTurnos.finalizarTurno(); 
        UpdateInfo(this , objetivo)

    }
    
    maldicion(objetivo) {
        if (this.estaFueraDeCombate()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
        
        objetivo.ataque -= 20;
        objetivo.defensa -= 20;
        this.energia -= 70;
        
        GestorDeTurnos.finalizarTurno(); 
        UpdateInfo(this , objetivo)

    }

    aliento(objetivo) {
        if (this.estaFueraDeCombate()) return false;
        if (!GestorDeTurnos.esTurno(this)) return false; 
        
        objetivo.vida -= 30;
        this.vida += 30;
        this.energia -= 70;
        
        GestorDeTurnos.finalizarTurno(); 
        UpdateInfo(this , objetivo)

    }
}

// Ejemplo de uso
const Yeffer = new Guerrero({ nombre: "Yeffer", velocidad: 10 });
const Arley = new Hechicero({ nombre: "Arley", velocidad: 8 });
const Walter = new Sanador({ nombre: "Walter", velocidad: 9 });

GestorDeTurnos.agregarPersonaje(Yeffer);
GestorDeTurnos.agregarPersonaje(Arley);
GestorDeTurnos.agregarPersonaje(Walter);

GestorDeTurnos.iniciarPartida();

