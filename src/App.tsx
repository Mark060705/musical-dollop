import './App.css'
import { useState } from 'react'
import Szobak from './components/szobak'
import { TANULOSZOBAK } from "./adatok";



function App() {
  const [szobak, setSzobak] = useState(TANULOSZOBAK)
  
  function helyetfoglal(index:number) {
    setSzobak(aktualisSzobak => aktualisSzobak.map((szoba, szobaIndex) => {
      if (szobaIndex === index && szoba.foglalt_helyek < szoba.ferohely) {
        return { ...szoba, foglalt_helyek: szoba.foglalt_helyek + 1 }
      }
      return szoba
    }))
  }

  return (
    <>

      <Szobak lista={szobak} helyetfoglal={helyetfoglal}/>
    </>
  )
}

export default App
