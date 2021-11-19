import { useParams } from "react-router"
import ButtonCheck from "../component/ButtonCheck"
import "./Check.css"

function Check() {
    const { amount } = useParams()
    return (
        <div className="check">
            <h1>Do you want to start the quiz with {amount} questions?</h1>
            <div className="buttons-check">
                <ButtonCheck color={"primary"} label={"Start"} path={`/query/${amount}`} />
                <ButtonCheck color={"default"} label={"Cancel"} path="/" />
            </div>
        </div>
    )
}

export default Check