import { useEffect, useState } from "react"
import apiFetch from "../../../utils/apiFetch"
import Input from "../../../utils/Fields"

export default function Details ({ data, setFalse, forceRefresh }) {

    const [edit, setEdit] = useState(false)
    const [listPreparateurs, setListPreparateurs] = useState()
    const [formData, setFormData] = useState({...data, destination: data.destination.lieu})
    
    useEffect(() => {
        const get = async () => {
            let {data} = await apiFetch('/api/livraisons/preparateurs', {method: 'GET'})
            setListPreparateurs(data)
        } 
        get()

        if (!formData['preparateur']) {
            valueChange('preparateur', 'indefini')
        }
    }, [])

    const submitNewLivraison = async (e) => {
        e.preventDefault()

        await apiFetch('/api/livraisons/'+data.id, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json'
            }
        })
        await new Promise(r => setTimeout(r, 100))
        forceRefresh()
        setEdit(false)
    }

    const valueChange = (name, value) => {
        setFormData({...formData, [name]: value})
    }

    const Info = ({name, type, children}) => <span className="detail">
        <label htmlFor={name}>{children}</label>
        { edit 
            ? <input type={type} id={name} value={formData[name]} onChange={(e) => valueChange(name, e.target.value)}/>
            : <p>{data[name]}</p>
        }
    </span>   

    return <div className="details">
        <button className="close" onClick={() => setFalse()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
        
        <Info name='nb_palettes' type='number'>Nombre de palettes :</Info>
        
        <span className="detail">
            <label name='preparateur' htmlFor='preparateur'>Préparateur :</label>
            { listPreparateurs && edit ? 
                Object.values(listPreparateurs).some(p => p.nom === formData['preparateur'] || 'indefini' === formData['preparateur']) ? 
                    <select name="preparateur" id="preparateur"
                        value={formData['preparateur']} 
                        onChange={(e) => valueChange('preparateur', e.target.value)}>
                        { listPreparateurs.map((preparateur, i) => 
                            <option value={preparateur.nom} key={i}>{preparateur.nom}</option>    
                        )}
                            <option value=''>Autre</option>
                            <option value='indefini' style={{fontStyle: 'italic', color: '#777', backgroundColor: 'white'}}>Indéfini</option>
                    </select>
                : <Input type='text' placeholder="Préparateur" name='preparateur' get={formData['preparateur']} set={valueChange}/>
            : data.preparateur ? <p>{data.preparateur.nom}</p> : <p style={{fontStyle: 'italic', color: '#777'}}>Indéfini</p>
            }
        </span>

        <Info name='ref' type='text'>Ref :</Info>

        <span className="comments-span">
            <label htmlFor='comments'>Commentaires :</label>
            <br/>
            { edit ? <textarea id="comments" 
                value={formData['commentaires'] ? formData['commentaires'] : ''} 
                onChange={(e) => valueChange('commentaires', e.target.value)}></textarea>
            : <p><br/>{data.commentaires}</p>
            }
        </span>
        
        <button className="save" onClick={(e) => {
            if (edit) {
                submitNewLivraison(e)
            } else {
                setEdit(true)
            }}}>
            {edit ? 'Sauvegarder' : 'Modifier'}
        </button>
    </div>
}