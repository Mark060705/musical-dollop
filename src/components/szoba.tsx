import React from 'react'
import type { SzobaType } from "../adatok";

interface SzobaProps {
    szoba:SzobaType,    
}

function helyetfoglal({szoba}: SzobaProps) {
    
    if (szoba.ferohely > szoba.foglalt_helyek) {
      szoba.foglalt_helyek++
    }

    
}
  
  


function Szoba({szoba}: SzobaProps) {

  return (
   <div>
        <h2>{szoba.szoba_nev}</h2><br />
        <p>{szoba.szobatipus}</p><br />
        <p>ID {szoba.id}</p>
        <p>Szobatípus {szoba.szobatipus}</p>
        <p>Emelet {szoba.emelet}</p>
        <p>Férőhely {szoba.ferohely}</p>
        <p>Foglalt helyek {szoba.foglalt_helyek}</p>
        <button onClick={()=>helyetfoglal(szoba)}>Helyet foglalok</button>
   </div>
  )
}


export default Szoba;