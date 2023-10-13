export default function Case ({ destination, taille, status, reference}) {

    return <div className="td"  onClick={() => console.log("clicked")}>
        <p className="h6">{destination}</p>
        <p className="h6">{taille}</p>
        <p className="h6" style={{
            color: (status === 'B') ? "red" : (status === 'D') ? "green" : "black",
            fontSize: '25px'
        }}>{status}</p>
        <p className="h6">{reference}</p>
    </div>
}