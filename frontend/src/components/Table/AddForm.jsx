import { useState } from "react"
import Input from "../../utils/Fields"

export default function AddForm ({ close, date, destination }) {
    const formatDate = (date) => {
        return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' +("0" + date.getDate()).slice(-2)
    }

    const [formData, setFormData] = useState({
        destination: destination,
        taille: '',
        status: '',
        ref: '',
        date: formatDate(date)
    })

    const submitNewLivraison = async (e) => {
        e.preventDefault()
        console.log(e)
        console.log(formData)
        console.log(JSON.stringify(formData))

        await fetch('http://localhost:8000/api/livraisons/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res)
            close()
        })
        .catch((err) => console.log(err))
    }

    const valueChange = (name, value) => {
        setFormData({...formData, [name]: value})
    }

    return <div id="addform">
        <button className="close" onClick={() => close()}>×</button>
        <form onSubmit={(e) => submitNewLivraison(e)}>
            <Input type='text' placeholder='Destination' name='destination' get={formData[['destination']].lieu} set={valueChange}/>
            <Input type='date' placeholder='Date' name='date' get={formData[['date']]} set={valueChange}/>
            <Input type='text' placeholder='Taille' name='taille' get={formData[['taille']]} set={valueChange}/>
            <Input type='text' placeholder='Status' name='status' get={formData[['status']]} set={valueChange}/>
            <Input type='text' placeholder='Ref' name='ref' get={formData[['ref']]} set={valueChange}/>
            <button type="submit" className="add">Ajouter</button>
        </form>
    </div> 
}