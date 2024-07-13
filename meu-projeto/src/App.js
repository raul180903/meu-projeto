import './App.css';
import MeuProjeto from './componentes/MeuProjeto'

function App() {
  /*nome normal*/
  var name = "Raul de Souza"
  const MinhaIdade = 20
  
  /*continha de +*/
function sum(a, b) {
   return (a + b)
}
  const url = "https://via.placeholder.com/150/blue"

  return (
    <div className="App">
      <h1>Meu nome eh {name} e tenho {MinhaIdade} anos.</h1>
      <img src={url} alt="Minha imagem" />
      <MeuProjeto/>
      <h1>A soma entre 47 + 58 é igual á {sum(47, 58)}</h1>
      
    </div>
  )
}

export default App;
