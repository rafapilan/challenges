import { useNavigate, useParams } from "react-router"
import ButtonCheck from "../components/ButtonCheck"
import { useQuestions } from "../context/Questions"
import "./Check.css"

function Check() {
    let navigate = useNavigate()

    const { amount } = useParams()

    const { questions } = useQuestions()

    const start = () => {
        if (questions !== [])
            navigate('/query')
    }

    const cancel = () => {
        navigate('/')
    }

    return (
        <div className="check">
            <h1>Do you want to start the quiz with {amount} questions?</h1>
            <div className="buttonsCheck">
                <ButtonCheck color={"primary"} label={"Start"} onClick={start} />
                <ButtonCheck color={"default"} label={"Cancel"} onClick={cancel} />
            </div>
        </div>
    )
}

export default Check