import axios from "axios"
import { useNavigate } from "react-router"
import ButtonAmount from "../components/ButtonAmount"
import { useQuestions } from "../context/Questions"
import "./Home.css"

function Home() {
    let navigate = useNavigate()

    const { setQuestions } = useQuestions()

    const start = (n: number) => {
        axios.get(`https://opentdb.com/api.php?amount=${n}`)
            .then(response => {
                setQuestions(response.data.results)
                navigate(`/check/${n}`)
            })
            .catch(() => start(n))
    }

    return (
        <div className="home">
            <h1>How many questions do you want to answer?</h1>
            <div className="buttons-home">
                <ButtonAmount label={1} click={start} />
                <ButtonAmount label={3} click={start} />
                <ButtonAmount label={5} click={start} />
                <ButtonAmount label={10} click={start} />
                <ButtonAmount label={15} click={start} />
                <ButtonAmount label={20} click={start} />
                <ButtonAmount label={30} click={start} />
            </div>
        </div>
    )
}

export default Home