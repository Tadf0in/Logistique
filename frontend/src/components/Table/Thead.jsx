export default function Thead ({ data }) {

    return <div className="tr thead">
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