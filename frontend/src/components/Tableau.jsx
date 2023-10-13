import Row from "./Row";

export default function Tableau () {
    const getDaysOfWeek = (day) => {
        let monday = new Date(day.setDate(day.getDate() - day.getDay() + (day.getDay() === 0 ? -6 : 1)))
        let week = []
        for (let i=0; i<5; i++) {
            week.push(new Date(day.setDate(monday.getDate() + i)))
        }
        return week
    }
    const dayLetters = ['L', 'M', 'M', 'J', 'V']
    const weekDays = getDaysOfWeek(new Date())

    return <div id="tableau">
        <div className="tab">
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