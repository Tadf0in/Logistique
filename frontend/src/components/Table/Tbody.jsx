import useFetch from "../../hooks/useFetch";
import Tr from "./Tr";

export default function Tbody ({weekDays}) {
    console.log(weekDays)
    const {loading, data} = useFetch('/api/livraisons/?start=' + 'YYYY-MM-DD' + '&end=' + 'YYYY-MM-DD', {method: 'GET'}, [weekDays])
    
    const dayLetters = ['L', 'M', 'M', 'J', 'V']


    return <div className="tbody">
        { loading && <>Loading ...</>}
        {
            weekDays.map((day, i) => 
                <Row 
                    jour={dayLetters[i]} 
                    date={day} 
                    key={i}
                />
            )
        }
    </div>
}