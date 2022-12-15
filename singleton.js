let contar = 0
let instancia

class Contador {
  constructor() {
    if (instancia) {
      throw new Error('Solo puedes tener una instancia')
    }

    instancia = this
  }

  getInstancia() {
    return this
  }

  getContar() {
    return contar
  }

  incrementar() {
    return ++contar
  }
}

export default Object.freeze(new Contador()) // Para que no se pueda cambiar el objecto desde fuera

// SOLO EN JAVASCRIPT
// Se puede simplificar, ya que los objectos se pasan por referencia

let contar2 = 0

const contador = {
  getInstancia() {
    return this
  },

  getContar() {
    return contar2
  },

  incrementar() {
    return ++contar2
  },
}

Object.freeze(contador)
export { contador }
