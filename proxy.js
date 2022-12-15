const persona = {
  nombre: 'Oswaldo',
  edad: 80
}

const mensajero = new Proxy(persona, {
  get: (objeto, propiedad) => {
    // console.log(`El valor es ${objeto[propiedad]}`)
    console.log(`El valor es ${Reflect.get(objeto, propiedad)}`)
  },
  set: (objeto, propiedad, valor) => {
    if (!valor) { throw new Error('Se necesita enviar un valor!') }

    console.log(`Cambiado de ${Reflect.get(objeto, propiedad)} a ${valor}`)
    // objeto[propiedad] = valor
    return Reflect.set(objeto, propiedad, valor)
  }
})

mensajero.nombre
mensajero.nombre = 'Luis'
mensajero.nombre
mensajero.nombre = ''
