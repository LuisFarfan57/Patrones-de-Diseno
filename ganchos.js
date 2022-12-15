const Titulo = ({ style, nombre }) => {
  return <h1 style={style}>Ganchos {nombre}</h1>
}

const useFondoRojo = () => {
  const style = { backgroundColor: 'red' }

  return style
}

const TituloRojo = (props) => {
  const style = useFondoRojo()
  return <Titulo {...props} style={style} />
}

ReactDOM.render(<TituloRojo nombre="luis" />, document.getElementById('root'))
