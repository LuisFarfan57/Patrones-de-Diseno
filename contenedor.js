const baseUrl = 'www.x.com/'
const fetchUrl = baseUrl + 'json/photos.json'

// El contenedor hace el fetch. La logica
class ContenedorDeParques extends React.Component {
  constructor() {
    super()
    this.state = {
      parques: []
    }
  }

  componentDidMount() {
    fetch(fetchUrl)
      .then((res) => {
        return res.json()
      })
      .then((parques) => {
        this.setState({ parques })
      })
  }

  render() {
    return <Parques parques={this.state.parques} />
  }
}

// Este componente solo renderiza
const Parques = ({ parques }) => {
  const style = { width: '100px' }

  return parques.map(parque => {
    const url = `${baseUrl}/highres/${parque.id}/1.jpg`

    return <img style={style} src={url} key={parque.id} alt="parque" />
  })
}

ReactDOM.render(<h1>Hello React</h1>, document.getElementById('root'))

// Se puede reemplazar con los hooks. Poniendo toda la logica compleja en custom hooks
