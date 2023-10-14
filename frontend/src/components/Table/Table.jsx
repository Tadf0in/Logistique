import { useEffect, useState } from "react";
import Tbody from "./Tbody";
import Theader from "./Theader";

export default function Table () {
    const [today, setToday] = useState(new Date())
    const [weekDays, setWeekDays] = useState()

    const getDaysOfWeek = (day) => {
        let monday = new Date(day.setDate(day.getDate() - day.getDay() + (day.getDay() === 0 ? -6 : 1)))
        let week = []
        for (let i=0; i<5; i++) {
            week.push(new Date(day.setDate(monday.getDate() + i)))
        }
        return week
    }
    useEffect(() => {
        setWeekDays(getDaysOfWeek(today))
    }, [today])

    return <div id="tableau">
        <div className="tab">
            <Theader setToday={setToday}/>
            { weekDays && <Tbody weekDays={weekDays}/>}
        </div>
    </div>
}