import Td from "./Td";

export default function Tr ({ jour, date, livraisons }) {
    
    return <div className="tr">
        <div className="th">
            <p>{jour}</p>
            <p>{("0" + date.getDate()).slice(-2)}</p>
        </div>
        {
            livraisons.map((data, i) => 
                <Td data={data} key={i}/>
            )
        }
    </div>
}