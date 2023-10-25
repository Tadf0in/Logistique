import { useState } from "react"
import Input, { Select } from "../../../utils/Fields"
import apiFetch from "../../../utils/apiFetch"

export default function AddForm ({ editing, close, date, destination, data, listDestinations, forceRefresh }) {
    const formatDate = (date) => {
        return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' +("0" + date.getDate()).slice(-2)
    }

    const [formData, setFormData] = useState(editing ? {...data, 'destination': data.destination.lieu} : {
        destination: destination.lieu,
        taille: 'FTL',
        status: 'B',
        ref: '',
        date: formatDate(date),
        adr: false
    })

    const submitNewLivraison = async (e) => {
        e.preventDefault()

        console.log(JSON.stringify(formData))

        let id = editing ? data.id : ''
        await apiFetch('/api/livraisons/'+id, {
            method: editing ? 'PUT' : 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json'
            }
        })
        await new Promise(r => setTimeout(r, 100));
        forceRefresh()
        close()
    }

    const valueChange = (name, value) => {
        setFormData({...formData, [name]: value})
    }

    return <div id="addform">
        <button className="close" onClick={() => close()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
        <form onSubmit={(e) => submitNewLivraison(e)}>
            <select name="destination" value={formData['destination']} onChange={(e) => valueChange('destination', e.target.value)}>
                { Object.values(listDestinations).map((d, i) => {
                    return <option value={d.lieu} key={i}>{d.lieu}</option>    
                }
                )}
                <option value=""></option>
            </select>
            <Input type='date' placeholder='Date' name='date' get={formData[['date']]} set={valueChange}/>
            <Select name='taille' get={formData[['taille']]} set={valueChange} options={['FTL', '3L/M', '6L/M', 'express', 'TNT']}/>
            <Select name='status' get={formData[['status']]} set={valueChange} options={['B', 'D', 'B+CMR']}/>
            <Input type='text' placeholder='Ref' name='ref' get={formData[['ref']]} set={valueChange}/>
            <span className="adr-span">
                <input type="checkbox" id='adr' name='adr' checked={formData['adr']} onChange={(e) => valueChange('adr', e.target.checked)}/>
                <label htmlFor='adr'>ADR</label>
            </span>
            <button type="submit" className="add">{editing ? 'Modifier' : 'Ajouter'}</button>
        </form>
    </div> 
}