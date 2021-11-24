import { useNavigate, useParams } from "react-router"
import Buttons from "../components/Buttons"
import { useQuestions } from "../context/Questions"
import "./Check.css"

function Check() {
    let navigate = useNavigate()

    const { amount } = useParams()

    const { questions } = useQuestions()

    const start = () => {
        if (questions !== [])
            navigate(`/quiz/${amount}`)
    }

    const cancel = () => {
        navigate('/')
    }

    return (
        <div className="check">
            <h1>Do you want to start the quiz with {amount} questions?</h1>
            <div className="buttonsCheck">
                <Buttons variant="contained" color={"primary"} label={"Start"} click={start} />
                <Buttons variant="contained" color={"default"} label={"Cancel"} click={cancel} />
            </div>
        </div>
    )
}

export default Check