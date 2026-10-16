import './App.css'
import Szobak from './components/szobak'
import { TANULOSZOBAK } from "./adatok";

function helyetfoglal(index:number) {
    
    if (TANULOSZOBAK[index].ferohely > TANULOSZOBAK[index].foglalt_helyek) {
      TANULOSZOBAK[index].foglalt_helyek++
    }
}

function App() {
  
  

  return (
    <>

      <Szobak lista={TANULOSZOBAK} helyetfoglal={helyetfoglal}/>
    </>
  )
}

export default App
