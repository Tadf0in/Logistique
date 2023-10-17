export default function Theader ({today, setToday}) { 

    const addDays = (date, nb_days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + nb_days)

    const getWeek = (date) => {
        let jan1 = new Date(date.getFullYear(), 0, 1, -1)
        let days = Math.floor((date - jan1) / (24 * 60 * 60 * 1000))
        return Math.ceil(days / 7)
    }

    return <div className="theader">
        <span>
            <button className="left" onClick={() => setToday((date) => addDays(date, -7))}>{'<'}</button>
            <button className="right" onClick={() => setToday((date) => addDays(date, +7))}>{'>'}</button>
        </span>

        <p>SEMAINE {getWeek(today)}</p>

        <button onClick={() => setToday(new Date())}>Aujourd'hui</button>
    </div>
}