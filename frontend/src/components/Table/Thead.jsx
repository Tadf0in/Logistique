import useFetch from "../../hooks/useFetch"

export default function Thead () {
    const {loading, data} = useFetch('/api/livraisons/destinations', {method: 'GET'}, [])

    return <div className="tr thead">
        { loading && <>Loading ...</>}
        { data && <>
            {data.filter((destination) => destination.favorite).map((destination, i) => 
                <div className="td" key={i}>
                    <p>{destination.lieu}</p>
                </div>
            )}
            </>
        }
    </div>
}