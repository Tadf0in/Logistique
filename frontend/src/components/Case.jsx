export default function Case ({ destination, taille, status, reference}) {

    return <div className="td"  onClick={() => console.log("clicked")}>
        <p>{destination}</p>
        <p>{taille}</p>
        <p style={{
            color: (status === 'B') ? "red" : (status === 'D') ? "green" : "black",
            fontSize: '25px'
        }}>{status}</p>
        <p>{reference}</p>
    </div>
}