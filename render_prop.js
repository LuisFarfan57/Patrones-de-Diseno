const Titulo = ({ style, nombre }) => {
  return <h1 style={style}>Render prop {nombre}</h1>
}

// Pasando el componente como propiedad
// const FondoRojo = ({ render }) => {
//   const style = { backgroundColor: 'red' }
//   return render(style)
// }

// Pasando el componente en los children
const FondoRojo = ({ children }) => {
  const style = { backgroundColor: 'red' }
  return children(style)
}

const TituloRojo = (props) => {
  const render = (style) => {
    return <Titulo {...props} style={style} />
  }

  // Se puede pasar como propiedad
  // return <FondoRojo render={render} />

  // O se puede pasar como children, ya que igual la funcion retorna un componente
  return <FondoRojo>{render}</FondoRojo>
}

ReactDOM.render(<TituloRojo nombre="luis" />, document.getElementById('root'))
