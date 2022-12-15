function App() {
  const datos = { texto: 'texto' }
  return <Abuelo datos={datos} />
}

const Abuelo = ({ datos }) => <Padre datos={datos} />
const Padre = ({ datos }) => <Hijo datos={datos} />
const Hijo = ({ datos }) => <Nieto datos={datos} />
const Nieto = ({ datos }) => <p>{datos.texto}</p>

// Para llegar a pasar los datos al Nieto, hay que pasar por el abuelo, padre, hijo

// El proveedor nos ayuda a evitar esto, y pasarle los datos solo al elemento que lo necesita

// Muy utilizado en React


// Esto se puede ver en React con el Context. Crea un proveedor que le va a pasar la informacion a todos los hijos que le mandemos, para que pueda usar
// los datos donde quiera

import { createContext, useContext } from 'react'

const Contexto = createContext(null)

const Memoria = ({ children }) => {
  <Contexto.Provider value={{ texto: 'texto' }}>
    {children}
  </Contexto.Provider>
}

const App2 = () => {
  return <Memoria><Abuelo2 datos={datos} /></Memoria>
}

const Abuelo2 = () => <Padre />
const Padre2 = () => <Hijo />
const Hijo2 = () => <Nieto />
const Nieto2 = () => {
  const { datos } = useContext(Contexto)
  return <p>{datos}</p>
}

// Algo malo que pasa es que todos los componentes que usen el proveedor se van a renderizar cuando algo cambie
// Para solucionarlo lo que se hace es crear diferentes contextos
