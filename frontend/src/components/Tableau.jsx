import { useEffect, useState } from "react";
import Row from "./Row";

export default function Tableau () {
    const [today, setToday] = useState(new Date())
    const [weekDays, setWeekDays] = useState([])

    const getDaysOfWeek = (day) => {
        let monday = new Date(day.setDate(day.getDate() - day.getDay() + (day.getDay() === 0 ? -6 : 1)))
        let week = []
        for (let i=0; i<5; i++) {
            week.push(new Date(day.setDate(monday.getDate() + i)))
        }
        return week
    }

    const dayLetters = ['L', 'M', 'M', 'J', 'V']
    useEffect(() => {
        setWeekDays(getDaysOfWeek(today))
    }, [today])
    
    const livraisons = [
        {
            destination: "",
            taille: "",
            status: "",
            ref: "",
            date: "",
        }
    ]

    return <div id="tableau">
        <div className="tab">
            <div className="theader">
                <button onClick={() => 
                    setToday((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7))
                }>{'<'}</button>
                
                <button onClick={() => 
                    setToday((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7))
                }>{'>'}</button>
            </div>
            <div className="tbody">
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
        </div>
    </div>
}