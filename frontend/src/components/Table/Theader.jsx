export default function Theader (setToday) {

    const addDays = (date, nb_days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + nb_days)

    return <div className="theader">
        <button onClick={() => setToday((date) => addDays(date, -7))}>{'<'}</button>
        <button onClick={() => setToday((date) => addDays(date, +7))}>{'>'}</button>
    </div>
}