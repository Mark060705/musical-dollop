
import type { SzobaType } from "../adatok";
import Szoba from "./szoba";

interface SzobakProps {
    lista:SzobaType[]
    
}

function Szobak({lista}:SzobakProps) {
    return(
    <div className='szobak'>
        {
            lista.map((e, i) => {
                return <Szoba szoba={e} key={i}/>
                }
            )
        }
    </div>
    )
}

export default Szobak