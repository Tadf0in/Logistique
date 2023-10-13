import Row from "./Row";

export default function Tableau () {

    return <div id="tableau">
        <div className="tab">
            <div className="tbody">
                <Row jour="Lundi"/>
                <Row jour="Mardi"/>
                <Row jour="Mercredi"/>
                <Row jour="Jeudi"/>
                <Row jour="Vendredi"/>
            </div>
        </div>
    </div>
}