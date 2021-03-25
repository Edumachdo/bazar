import './App.css';
import Corpo from './Components/corpo';
import Footer from './Components/footer';
import Sobre from './Components/sobre';
import capa3 from './Components/img/capa3.png'
import Loja from './Components/loja';

function App() {
  return (
    <div className="App">
      <div>
      <img className="header" src={capa3}/>
      <Sobre />
      <Corpo />
      <Loja />
      <Footer/>
      </div>
    </div>
  );
}

export default App;
