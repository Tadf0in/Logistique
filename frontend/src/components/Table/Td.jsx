import { useState } from "react"
import AddForm from "./AddForm"

export default function Td ({ data={}, date, destination }) {
    const [adding, setAdding] = useState(false)
    const rempli = Object.keys(data).length > 0

    const setAddingFalse = () => {
        setAdding(false)
    }

    if (Array.isArray(data)) {
        if (data.length === 1) { data = data[0]}
        else if (data.length > 1) {
            data = data[0]
            // Many in one cell
        }
    }

    return <div className="td" onClick={() => {if (!adding) {setAdding(true)}}}>

        { rempli > 0 && 
        <>
            { !data.destination.favorite && <p>{data.destination.lieu}</p> }
            <p>{data.taille}</p>
            <p style={{color: (data.status === 'B') ? "red" : (data.status === 'D') ? "green" : "black",}}>
                {data.status}</p>
            <p>{data.ref}</p>
        </> 
        }  

        { adding && <AddForm close={setAddingFalse} date={date} destination={destination}/> }

    </div>
}