export default function Td ({ data }) {

    return <div className="td"  onClick={() => console.log("clicked")}>
        <p>{data.destination}</p>
        <p>{data.taille}</p>
        <p style={{
            color: (data.status === 'B') ? "red" : (data.status === 'D') ? "green" : "black",
            fontSize: '25px'
        }}>{data.status}</p>
        <p>{data.ref}</p>
    </div>
}