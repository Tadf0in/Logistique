import { useEffect, useState } from "react"
import apiFetch from "../../utils/apiFetch";
import Thead from "./Thead";
import Tr from "./Tr";

export default function Tbody ({weekDays, forceRefresh}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    
    const formatDay = (day) => day.getFullYear() + '-' + ("0" + (day.getMonth() + 1)).slice(-2) + '-' + ("0" + day.getDate()).slice(-2)
    
    useEffect(() => {
        const get = async () => {
            let {loading, data} = await apiFetch(
                '/api/livraisons/all?start=' + formatDay(weekDays[0]) + '&end=' + formatDay(weekDays[4]), 
                {method: 'GET'}
            )
            setLoading(loading)
            setData(data)
        }
        get()        
        let interval = setInterval(() => get(), 10000)
        return () => clearInterval(interval)
    }, [weekDays])

    let livraisonsData
    let destinationsData
    let favoritesData
    if (data) {
        livraisonsData = data.livraisons
        destinationsData = data.destinations
        favoritesData = destinationsData.filter((destination) => destination.favorite)
    }

    const dayLetters = ['L', 'M', 'M', 'J', 'V']

    return <div className="tbody" id="tbody" onWheel={(e) => document.getElementById('tbody').scrollLeft += e.deltaY/8}>
        { loading && <>Loading ...</> }

        { livraisonsData && <>
            <Thead data={favoritesData}/>
            
            {weekDays.map((day, i) => 
                <Tr 
                    jour={dayLetters[i]} 
                    date={weekDays[i]} 
                    livraisons={livraisonsData.filter((livraison) => livraison.date === formatDay(weekDays[i]))}
                    favoris={favoritesData}
                    listDestinations={destinationsData}
                    forceRefresh={forceRefresh}
                    key={i}
                />
            )}
        </>}
    </div>
}