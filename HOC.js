const Titulo = ({ style, nombre }) => {
  return <h1 style={style}>HOC {nombre}</h1>
}

const withFondoRojo = (Componente) => {
  return (props) => {
    const style = { backgroundColor: 'red' }
    return <Componente {...props} style={style} />
  }
}

const TituloRojo = withFondoRojo(Titulo)

ReactDOM.render(<TituloRojo nombre="luis" />, document.getElementById('root'))
