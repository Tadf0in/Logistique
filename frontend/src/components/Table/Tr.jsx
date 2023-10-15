import Td from "./Td";

export default function Tr ({ jour, date, livraisons }) {
    const isSameDay = (day1, day2) => 
        day1.getFullYear() === day2.getFullYear() && 
        day1.getMonth() ===  day2.getMonth() && 
        day1.getDate() === day2.getDate()

    return <div className="tr">
        <div className="th" style={{backgroundColor:(isSameDay(date, new Date())) ? '#ffe0e0' : '#f3f3f3'}}>
            <p>{jour}</p>
            <p>{("0" + date.getDate()).slice(-2)}</p>
        </div>
        {
            livraisons.map((data, i) => 
                <Td data={data} key={i}/>
            )
        }
        <Td empty={true}/>
    </div>
}