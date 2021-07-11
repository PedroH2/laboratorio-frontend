import logo from './logo.svg';
import './App.css';
import ListarTrabalhos from './components/ListarTrabalhos';
import CadastroTrabalho from './components/CadastroTrabalho';

function App() {
  return (
    <div className="flex-container">
      <ListarTrabalhos/>
      <CadastroTrabalho/>
    </div>
  );
}

export default App;
