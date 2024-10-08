
class Personaje {
    constructor({ name }) {
      this.name = name;
      this.life = 100;
      this.atk = 0;
      this.def = 0;
      this.energy = 100;
    }
    dead(objetivo = false) {
      if (objetivo.life <= 0 || this.life <= 0) {
        console.log(`Estas intentando interactuar con personajes muertos`);
        return true;
      }
    }
    exhausted() {
      if (this.energy < 70) return true;
    }
    tired() {
      if (this.energy < 30) return true;
    }

    
    Atacar(objetivo) {
      if (this.dead(objetivo)) return false;
  
  
      if (this.atk > objetivo.def) {
  
        objetivo.life = objetivo.life - (this.atk - objetivo.def);
  
        if (objetivo.life < 0) {
          objetivo.life = 0;
        }
      } else {
        console.log(
          `Tu ataque es de ${this.atk} y la defensa del objetivo es mayor, es de ${objetivo.def} no le causas daño`
        );
  
      }
      
      if (this.constructor.name == 'Warrior') {
          this.special++
          if (this.special == 2) {
            this.atk +=10
            this.special =0
          }
        }
        Reloade(this, objetivo);
    }
  }
  
  class Warrior extends Personaje {
    constructor({ name }) {
      super({ name });
      this.special = 0;
      this.atk = 60
      this.def = 40
    }
  
    blindar() {
      if (this.dead()) return false;
      if (this.tired()) return false;
      this.def += 15;
      this.energy -= 30;
  
      // console.log(`El personaje ${this.name} Activa Blindar`);
      // console.log(this);
      Reloade(this)
      
  
    }
  
    iraYopuka(objetivo) {
      if (this.dead(objetivo)) return false;
      if (this.exhausted()) return false;
      let dif = this.atk - objetivo.def;
      if (dif >= 30) {
        objetivo.life = 0;
        this.energy -= 70;
        Reloade(this,objetivo)
      }
    }
  }
  
  class Healer extends Personaje{
    constructor({name}){
      super({name });
      this.special = 1;
      this.atk = 30
      this.def = 60
    };
  
    curar = function (objetivo) {
      if (this.dead())  return false;
      if (this.tired()) return false;
    
      objetivo.life += 30;
      this.energy -= 30;
      if (objetivo.life > 100) {
        objetivo.life = 100;
      }
  
      Reloade(this,objetivo)
    };
  
    sacrificio = function (objetivo) {
        if (this.dead())      return false;
        if (this.exhausted()) return false;
  
        let cantidad = 100 - objetivo.life
        if (cantidad < this.life){
            objetivo.life += cantidad
            this.life     -= cantidad;
            this.energy   -= 70 
        }else{
            objetivo.life += this.life 
            this.life = 1
            this.energy   -= 70 
        }
  
        Reloade(this,objetivo)
  
  
    };
  
    revivir = function (objetivo , costo = 28){

      suficientePoder(costo)

  
        if (this.special == 0) return false;
        if (this.life === 0)   return false;  
        if (objetivo.life > 0) return false;            
        if (this.exhausted())  return false;
  
        objetivo.life = 40
        this.energy   -=70
        this.special = 0
  
        Reloade(this,objetivo)
  
  
  
    }
  
  
  
  
  }
  
  class Witcher extends Personaje{
    constructor({name}){
      super({name})
      this.special = 1
      this.atk = 70
      this.def = 30
    }
  
    Mejora = function (objetivo) {
      if (this.dead())  return false;
      if (this.tired()) return false;
      objetivo.atk += 10;
      objetivo.def += 10;
      this.energy -= 30

      Reloade(this, objetivo)
      
    };
    Peste = function (objetivo) {
      if (this.dead())  return false;
      if (this.exhausted()) return false;
      objetivo.atk -= 20;
      objetivo.def -= 20;
      this.energy -= 70

      Reloade(this, objetivo)
      
    };
  }
  
  
  
  
  const Yeffer = new Warrior({name: "Yeffer"});

  const Arley = new Witcher({ name: "Arley"});

  const Walter = new Healer({name: "Walter"});


 