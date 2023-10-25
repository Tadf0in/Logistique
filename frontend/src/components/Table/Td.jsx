import { useState } from "react"
import AddForm from "./Cell/AddForm"
import adr from "../../assets/adr.png"
import Edit from "./Cell/Edit"
import Details from "./Cell/Details"

export default function Td ({ data, date, destination, listDestinations, forceRefresh }) {
    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false)
    const [details, setDetails] = useState(false)

    const rempli = Object.keys(data).length > 0

    const setFalse = () => {
        setAdding(false)
        setEditing(false)
        setDetails(false)
    }

    if (Array.isArray(data)) {
        if (data.length === 1) { data = data[0]}
        else if (data.length > 1) {
            data = data[0]
            // Many in one cell
        }
    }

    return <>
        { rempli > 0 ?
        <div className="td" style={{backgroundColor: data.quai ? '#eefce9' : ''}} onClick={(e) => {if (!details && e.target === e.currentTarget) {setDetails(true)}}}>
            { !data.destination.favorite && <p>{data.destination.lieu}</p> }
            <p>{data.taille}</p>
            <p style={{color: (data.status[0] === 'B') ? "red" : (data.status[0] === 'D') ? "green" : "black",}}>
                {data.status}
            </p>
            { data.adr && <img src={adr} alt='adr' className="picto"></img>}
            <p>{data.ref}</p>

            <Edit data={data} forceRefresh={forceRefresh} adding={adding} setAdding={setAdding} setEditing={setEditing} />

            <hr className='barre' id='barre' hidden={!data.finish}/>
        </div> 
        : <div className="td" onClick={() => {if (!adding) {setAdding(true)}}}></div>
        }  

        { details && <Details data={data} setFalse={setFalse} /> }
        { adding && <AddForm editing={false} close={setFalse} date={date} destination={destination} listDestinations={listDestinations} forceRefresh={forceRefresh}/> }
        { editing && <AddForm editing={true} close={setFalse} date={date} data={data} listDestinations={listDestinations} forceRefresh={forceRefresh}/>}
    </>
}