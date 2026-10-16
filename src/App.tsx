import './App.css'
import Szobak from './components/szobak'
import { TANULOSZOBAK } from "./adatok";

function App() {
  
  

  return (
    <>

      <Szobak lista={TANULOSZOBAK}/>
    </>
  )
}

export default App
