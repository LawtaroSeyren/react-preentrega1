import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer saludo="Bienvenidios a IronClad"/>
    </>
  );
}

export default App;