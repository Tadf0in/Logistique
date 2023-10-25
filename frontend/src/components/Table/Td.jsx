import { useState } from "react"
import AddForm from "./AddForm"
import apiFetch from "../../utils/apiFetch"

export default function Td ({ data, date, destination, listDestinations, forceRefresh }) {
    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false)

    const rempli = Object.keys(data).length > 0

    const setAddingFalse = () => {
        setAdding(false)
        setEditing(false)
    }

    if (Array.isArray(data)) {
        if (data.length === 1) { data = data[0]}
        else if (data.length > 1) {
            data = data[0]
            // Many in one cell
        }
    }

    const edit = (method) => {
        apiFetch('/api/livraisons/'+data.id, {method:method})
        forceRefresh()
    }

    return <>
        { rempli > 0 && !data.hidden ?
        <div className="td">
            { !data.destination.favorite && <p>{data.destination.lieu}</p> }
            <p>{data.taille}</p>
            <p style={{color: (data.status === 'B') ? "red" : (data.status === 'D') ? "green" : "black",}}>
                {data.status}</p>
            <p>{data.ref}</p>

            <span className="edit">
                <button className="check" onClick={() => edit('PATCH')}>V</button>
                <button className="plus" onClick={() => {if (!adding) {setAdding(true);setEditing(false)}}}>+</button>
                <button className="minus" onClick={() => edit('DELETE')}>-</button>
                { !data.finish && <button className="pen" onClick={() => {if (!adding) {setAdding(true);setEditing(true)}}}>/</button>}
            </span>

            <hr className='barre' id='barre' hidden={!data.finish}/>
        </div> 
        : <div className="td" onClick={() => {if (!adding) {setAdding(true)}}}></div>
        }  

        { adding && <AddForm editing={false} close={setAddingFalse} date={date} destination={destination} listDestinations={listDestinations} forceRefresh={forceRefresh}/> }
        { editing && <AddForm editing={true} close={setAddingFalse} date={date} data={data} listDestinations={listDestinations} forceRefresh={forceRefresh}/>}
    </>
}