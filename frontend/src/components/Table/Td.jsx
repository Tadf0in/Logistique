import { useState } from "react"
import AddForm from "./AddForm"
import apiFetch from "../../utils/apiFetch"
import adr from "../../assets/adr.png"

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
        { rempli > 0 ?
        <div className="td">
            { !data.destination.favorite && <p>{data.destination.lieu}</p> }
            <p>{data.taille}</p>
            <p style={{color: (data.status[0] === 'B') ? "red" : (data.status[0] === 'D') ? "green" : "black",}}>
                {data.status}
            </p>
            { data.adr && <img src={adr} alt='adr' className="picto"></img>}
            <p>{data.ref}</p>

            <span className="edit">
                <button className="check" onClick={() => edit('PATCH')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                </button>
                <button className="plus" onClick={() => {if (!adding) {setAdding(true);setEditing(false)}}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>               
                </button>
                <button className="minus" onClick={() => edit('DELETE')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                </button>
                { !data.finish && <button className="pen" onClick={() => {if (!adding) {setAdding(true);setEditing(true)}}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                </button>}
            </span>

            <hr className='barre' id='barre' hidden={!data.finish}/>
        </div> 
        : <div className="td" onClick={() => {if (!adding) {setAdding(true)}}}></div>
        }  

        { adding && <AddForm editing={false} close={setAddingFalse} date={date} destination={destination} listDestinations={listDestinations} forceRefresh={forceRefresh}/> }
        { editing && <AddForm editing={true} close={setAddingFalse} date={date} data={data} listDestinations={listDestinations} forceRefresh={forceRefresh}/>}
    </>
}