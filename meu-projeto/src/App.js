import './App.css';
import DigaMeuNome from './componentes/DigaMeuNome';
import Marcas from './componentes/Marcas'
import Pessoa from './componentes/Pessoa'

function App() {

  const nome = "Felipe"
  const carro2 = "Mercedes"
  const esporte = "Fórmula 1"
  const roupa = "Nike"


  return (
    <div className="App">
      <DigaMeuNome nome="Raul" nomenamorada= "Ellen"/>
      <Marcas carro1 = "Ferrari" carro2={carro2} esporte={esporte} roupa={roupa}/>
      <Pessoa  
        nome = "Raul"
        idade = "20"
        profissão = "Programador Web"
        foto ="https://via.placeholder.com/150x150>"
      />    
    </div>
  )
}

export default App;
