export default function AddForm ({ close, date, destination }) {

    const formatDate = (date) => {
        return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' +("0" + date.getDate()).slice(-2)
    }

    return <div id="addform">
        <button className="close" onClick={() => close()}>X</button>
        <form>
            <input type='text' placeholder="Destination" value={destination.lieu}/>
            <input type='text' placeholder="Status"/>
            <input type='text' placeholder="Taille"/>
            <input type='text' placeholder="Ref"/>
            <input type='date' placeholder="Date" value={formatDate(date)}/>
            <button type="submit">Ajouter</button>
        </form>
    </div> 
}