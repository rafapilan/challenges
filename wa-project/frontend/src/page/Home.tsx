import ButtonAmount from "../component/ButtonAmount"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <h1>How many questions do you want to answer?</h1>
            <div className="buttons-home">
                <ButtonAmount label={1} />
                <ButtonAmount label={3} />
                <ButtonAmount label={5} />
                <ButtonAmount label={10} />
                <ButtonAmount label={15} />
                <ButtonAmount label={20} />
                <ButtonAmount label={30} />
            </div>
        </div>
    )
}

export default Home