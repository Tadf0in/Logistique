import { useState } from "react"
import Input, { Select } from "../../utils/Fields"
import apiFetch from "../../utils/apiFetch"

export default function AddForm ({ editing, close, date, destination, data, listDestinations, forceRefresh }) {
    const formatDate = (date) => {
        return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' +("0" + date.getDate()).slice(-2)
    }

    const [formData, setFormData] = useState(editing ? {...data, 'destination': data.destination.lieu} : {
        destination: destination.lieu,
        taille: 'FTL',
        status: 'B',
        ref: '',
        date: formatDate(date)
    })

    const submitNewLivraison = async (e) => {
        e.preventDefault()

        let id = editing ? data.id : ''
        await apiFetch('/api/livraisons/'+id, {
            method: editing ? 'PUT' : 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json'
            }
        })
        forceRefresh()
        close()
    }

    const valueChange = (name, value) => {
        setFormData({...formData, [name]: value})
    }

    return <div id="addform">
        <button className="close" onClick={() => close()}>×</button>
        <form onSubmit={(e) => submitNewLivraison(e)}>
            <select name="destination" value={formData['destination']} onChange={(e) => valueChange('destination', e.target.value)}>
                { Object.values(listDestinations).map((d, i) => {
                    return <option value={d.lieu} key={i}>{d.lieu}</option>    
                }
                )}
                <option value=""></option>
            </select>
            <Input type='date' placeholder='Date' name='date' get={formData[['date']]} set={valueChange}/>
            <Select name='taille' get={formData[['taille']]} set={valueChange} options={['FTL', '3L/M', '6L/M']}/>
            <Select name='status' get={formData[['status']]} set={valueChange} options={['B', 'D']}/>
            <Input type='text' placeholder='Ref' name='ref' get={formData[['ref']]} set={valueChange}/>
            <button type="submit" className="add">{editing ? 'Modifier' : 'Ajouter'}</button>
        </form>
    </div> 
}