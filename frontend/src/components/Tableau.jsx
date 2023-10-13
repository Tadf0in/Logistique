import Row from "./Row";

export default function Tableau () {

    return <div id="tableau">
        <div className="tab">
            <div className="tbody">
                <Row jour="L" date="01"/>
                <Row jour="M" date="02"/>
                <Row jour="M" date="03"/>
                <Row jour="J" date="04"/>
                <Row jour="V" date="05"/>
            </div>
        </div>
    </div>
}