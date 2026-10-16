
import type { SzobaType } from "../adatok";
import Szoba from "./szoba";

interface SzobakProps {
    lista:SzobaType[]
    helyetfoglal:(index:number)=>void
}

function Szobak({lista,helyetfoglal}:SzobakProps) {
    return(
    <div className='szobak'>
        {
            lista.map((e, i) => {
                return <Szoba szoba={e} index={i} helyetfoglal={helyetfoglal} key={i}/>
                }
            )
        }
    </div>
    )
}

export default Szobak