import useFetch from "../../hooks/useFetch";
import Thead from "./Thead";
import Tr from "./Tr";

export default function Tbody ({weekDays}) {
    
    const formatDay = (day) => day.getFullYear() + '-' + ("0" + (day.getMonth() + 1)).slice(-2) + '-' + ("0" + day.getDate()).slice(-2)

    const {loading: livraisonsLoading, data: livraisonsData} = useFetch('/api/livraisons/?start=' + formatDay(weekDays[0]) + '&end=' + formatDay(weekDays[4]), {method: 'GET'}, [weekDays])
    const {data: favoritesData} = useFetch('/api/livraisons/destinations?favorite', {method: 'GET'}, [weekDays])
    
    const dayLetters = ['L', 'M', 'M', 'J', 'V']

    return <div className="tbody">
        { livraisonsLoading && <>Loading ...</> }
        
        { favoritesData && <Thead data={favoritesData}/> } 
        { livraisonsData && favoritesData &&
            weekDays.map((day, i) => 
                <Tr 
                    jour={dayLetters[i]} 
                    date={weekDays[i]} 
                    livraisons={livraisonsData.filter((livraison) => livraison.date === formatDay(weekDays[i]))}
                    favoris={favoritesData}
                    key={i}
                />
            )
        }
    </div>
}