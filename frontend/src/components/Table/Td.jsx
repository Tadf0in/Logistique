export default function Td ({ data={}, empty=false }) {

    const newLivraison = (e) => {
        console.log("clicked")
        console.log(e)
    }

    console.log(data)
    return <>
        { empty ? <div className="td" onClick={(e) => newLivraison(e) }></div> :
        
        <div className="td">
            { !data.destination.favorite && <p>data.destination.lieu</p> }
            <p>{data.taille}</p>
            <p style={{color: (data.status === 'B') ? "red" : (data.status === 'D') ? "green" : "black",}}>
                {data.status}</p>
            <p>{data.ref}</p>
        </div>
        }  
    </>  
}