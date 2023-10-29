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
    if (Array.isArray(data)) { data = data[0] }

    const setFalse = () => {
        setAdding(false)
        setEditing(false)
        setDetails(false)
    }

    return <>
        { rempli > 0 ?
        <div className="td" style={{backgroundColor: data.quai ? '#dbffdb' : data.finish ? '#ffdbdb' : ''}} onClick={(e) => {if (!details && e.target === e.currentTarget) {setDetails(true)}}}>
            { !data.destination.favorite && <p>{data.destination.lieu}</p> }
            <p className={data.taille ? '' : 'indefini'}>{data.taille ? data.taille : 'Indéfini'}</p>
            <p style={{color: (data.status[0] === 'B') ? "red" : (data.status[0] === 'D') ? "green" : ""}} className={data.status ? '' : 'indefini'}>
                {data.status ? data.status : 'Indéfini'}
            </p>
            { data.adr && <img src={adr} alt='adr' className="picto"></img>}
            <p className={data.ref ? '' : 'indefini'}>{data.ref ? data.ref : 'Indéfini'}</p>

            <Edit data={data} forceRefresh={forceRefresh} adding={adding} setAdding={setAdding} setEditing={setEditing} />

            {/* <hr className='barre' id='barre' hidden={!data.finish}/> */}
        </div> 
        : <div className="td" onClick={() => {if (!adding) {setAdding(true)}}}></div>
        }  

        { details && data && <Details data={data} setFalse={setFalse} forceRefresh={forceRefresh}/> }
        { adding && <AddForm editing={false} close={setFalse} date={date} destination={destination} listDestinations={listDestinations} forceRefresh={forceRefresh}/> }
        { editing && <AddForm editing={true} close={setFalse} date={date} data={data} listDestinations={listDestinations} forceRefresh={forceRefresh}/>}
    </>
}