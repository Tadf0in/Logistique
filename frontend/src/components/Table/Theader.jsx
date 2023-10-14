export default function Theader ({today, setToday}) { 

    const addDays = (date, nb_days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + nb_days)

    const getWeek = (date) => {
        let jan1 = new Date(date.getFullYear(), 0, 1)
        let days = Math.floor((date - jan1) / (24 * 60 * 60 * 1000))
        return Math.ceil(days / 7)
    }

    return <div className="theader">
        <button onClick={() => setToday((date) => addDays(date, -7))}>{'<'}</button>
        <p>SEMAINE {getWeek(today)}</p>
        <button onClick={() => setToday((date) => addDays(date, +7))}>{'>'}</button>
    </div>
}