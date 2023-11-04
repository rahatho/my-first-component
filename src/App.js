import Copyright from "./Copyright";
import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";

export default function App() {
    return (
        <>
            <FancyText title text="Get Inspired App"/>
            <InspirationGenerator>
                <Copyright year={2004}/>
            </InspirationGenerator>
        </>
    );
}