export default function Details ({ data, setFalse }) {

    let preparateur
    if (data.preparateur) {
        preparateur = data.preparateur.nom
    } else {
        preparateur = ''
    }

    return <div className="details">
        <button className="close" onClick={() => setFalse()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>

        <p>Nombre de palettes : {data.nb_palettes}</p>
        <p>Préparateur : {preparateur}</p>
        <p>Ref: {data.ref}</p>
        
        <label htmlFor='comments'>Commentaires :</label>
        
        <p>{data.commentaires}</p>
        {/* <textarea id="comments" defaultValue={data.commentaires}></textarea> */}
        {/* <button className="save">Sauvegarder</button> */}
    </div>
}