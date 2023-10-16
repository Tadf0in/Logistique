export default function Td ({ data={} }) {

    const newLivraison = (e) => {
        console.log("clicked")
        console.log(e)
    }

    if (Array.isArray(data)) {
        if (data.length === 1) { data = data[0]}
        else if (data.length > 1) {
            // Many in one cell
        }
    }

    return <>
        { Object.keys(data).length === 0 ? <div className="td" onClick={(e) => newLivraison(e) }></div> 
        :
        <div className="td">
                { !data.destination.favorite && <p>{data.destination.lieu}</p> }
                <p>{data.taille}</p>
                <p style={{color: (data.status === 'B') ? "red" : (data.status === 'D') ? "green" : "black",}}>
                    {data.status}</p>
                <p>{data.ref}</p>
        </div>
        }  
    </>  
}