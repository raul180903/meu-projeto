import './App.css';
import Pessoa from './componentes/Pessoa'
import Frase from './componentes/Frase';

function App() {

  const nome = "Felipe"
  const carro2 = "Mercedes"
  const esporte = "Fórmula 1"
  const roupa = "Nike"

  return (
    <div className="App">
      <Frase/>
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
