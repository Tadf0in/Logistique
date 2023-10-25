import { useEffect, useState } from "react";
import Tbody from "./Tbody";
import Theader from "./Theader";

export default function Table () {
    const [today, setToday] = useState(new Date())
    const [weekDays, setWeekDays] = useState()

    const getDaysOfWeek = (day) => {
        let monday = new Date(day)
        monday = new Date(monday.setDate(day.getDate() - day.getDay() + (day.getDay() === 0 ? -6 : 1)))
        let week = []
        for (let i=0; i<5; i++) {
            week.push(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i))
        }
        return week
    }
    useEffect(() => {
        setWeekDays(getDaysOfWeek(today))
    }, [today])

    const forceRefresh = () => {
        setWeekDays(arr => [new Date(arr[0].getTime() + 1)].concat(arr.slice(1)))
    }

    return <div id="tableau">
        <div className="tab">
            <Theader today={today} setToday={setToday}/>
            { weekDays && <Tbody weekDays={weekDays} forceRefresh={forceRefresh}/>}
        </div>
    </div>
}