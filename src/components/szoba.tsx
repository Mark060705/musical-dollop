import React from 'react'
import type { SzobaType } from "../adatok";

interface SzobaProps {
    szoba:SzobaType,
    index:number,
    helyetfoglal:(index:number)=>void,    
}


    

  
  


function Szoba({szoba, index, helyetfoglal}: SzobaProps) {
  

  return (
   <div>
        <h2>{szoba.szoba_nev}</h2><br />
        <p>{szoba.szobatipus}</p><br />
        <p>ID {szoba.id}</p>
        <p>Szobatípus {szoba.szobatipus}</p>
        <p>Emelet {szoba.emelet}</p>
        <p>Férőhely {szoba.ferohely}</p>
        <p>Foglalt helyek {szoba.foglalt_helyek}</p>
        <button onClick={()=>{helyetfoglal({index})}}>Helyet foglalok</button>
   </div>
  )
}


export default Szoba;