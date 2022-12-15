class Estudiante {
  constructor(nombre) {
    this.nombre = nombre
  }
}

const persona = {
  saludar() {
    console.log(`Hola mi nombre es: ${this.nombre}`)
  }
}

Object.assign(Estudiante.prototype, persona)

const estudiante = new Estudiante('Luis')
estudiante.saludar()
