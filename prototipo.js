class Alexa {
  constructor(version) {
    this.version = version
  }

  saludar() {
    console.log('Hola, soy Alexa!')
  }
}

const alexa1 = new Alexa('1')
const alexa2 = new Alexa('2')
const alexa3 = new Alexa('3')

// Alexa.prototype.saludar()

// alexa1.saludar()
// alexa1.__proto__.saludar() // Cada objecto tiene una propiedad __proto__ que hace referencia al prototipo

class EchoDot extends Alexa {
  constructor(version) {
    super(version)
  }

  apagar() {
    console.log('Buenas noches!')
  }
}

const echoDot = new EchoDot('1')

// echoDot.saludar() // Funciona porque busca en el prototipo
// echoDot.__proto__.saludar() // Funciona por la misma razon
// echoDot.__proto__.__proto__.saludar() // Funciona porque el prototipo del prototipo (Alexa) tiene el metodo saludar

// echoDot.apagar() // Funciona porque el prototipo de EchoDot tiene el metodo apagar
// echoDot.__proto__.apagar() // Funciona igual
// echoDot.__proto__.__proto__.apagar() // No funciona porque el prototipo del prototipo EchoDot (Alexa) no tiene el metodo apagar

// Se puede crear un objeto basado en un prototipo

const echoDot2 = Object.create(EchoDot.prototype)
echoDot2.apagar() // Funciona porque se creo un objeto basado en el prototipo de EchoDot
