import { useEffect, useState } from "react"
import apiFetch from "../../../utils/apiFetch"

export default function Details ({ data, setFalse }) {

    const [edit, setEdit] = useState(false)
    const [listPreparateurs, setListPreparateurs] = useState()
    
    useEffect(() => {
        const get = async () => {
            let {data} = await apiFetch('/api/livraisons/preparateurs', {method: 'GET'})
            setListPreparateurs(data)
        } 
        get()
    }, [])

    let preparateur
    if (data.preparateur) {
        preparateur = data.preparateur.nom
    } else {
        preparateur = ''
    }

    const Info = ({name, d, children}) => <span className="detail">
        <label htmlFor={name}>{children}</label>
        { edit 
            ? <input type='text' id={name} value={d} onChange={(e) => console.log(e)}/>
            : <p>{d}</p>
        }
    </span>   

    return <div className="details">
        <button className="close" onClick={() => setFalse()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
        
        <Info name='nb_pal' d={data.nb_palettes}>Nombre de palettes :</Info>
        <span className="detail">
            <label name='preparateur' htmlFor='preparateur'>Préparateur :</label>
            { listPreparateurs && edit 
            ? <select name="preparateur" id="preparateur">
                { listPreparateurs.map((preparateur, i) => 
                    <option value={preparateur.nom} key={i}>{preparateur.nom}</option>    
                )}
            </select>
            : data.preparateur ? <p>{data.preparateur.nom}</p> : <p style={{fontStyle: 'italic', color: '#777'}}>Indéfini</p>
            }
        </span>
        <Info name='ref' d={data.ref}>Ref :</Info>
        <span className="comments-span">
            <label htmlFor='comments'>Commentaires :</label>
            <br/>
            { edit ? <textarea id="comments" defaultValue={data.commentaires}></textarea>
            : <p><br/>{data.commentaires}</p>
            }
        </span>
        
        <button className="save" onClick={() => setEdit(e => !e)}>{edit ? 'Sauvegarder' : 'Modifier'}</button>
    </div>
}