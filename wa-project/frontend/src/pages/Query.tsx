import { useEffect, useState } from 'react'
import ButtonAnswer from '../components/ButtonAnswer'
import { useQuestions } from '../context/Questions'
import './Query.css'

function Query() {

    const [activeQuestion, setActiveQuestion] = useState(0)

    const { questions } = useQuestions()

    const [query, setQuery] = useState({
        category: 'Category',
        difficulty: 'Difficulty',
        question: 'How about a question?',
        correct_answer: 'Correct answer.',
        incorrect_answers: ['Incorrect answer 1.', 'Incorrect answer 2.']
    })

    const [answers, setAnswers] = useState(['Incorrect answer 1.', 'Incorrect answer 2.', ])

    useEffect(() => {
        setQuery(questions[activeQuestion])
    }, [activeQuestion])

    useEffect(() => {
        let array = questions[activeQuestion].incorrect_answers
        array.push(questions[activeQuestion].correct_answer)
        setAnswers(array)
    }, [activeQuestion])

    const response = (resp: string) => {
        setActiveQuestion(activeQuestion + 1)
    }

    return (
        <div className="content">
            <div className="label"><h5>{query.category} ({query.difficulty})</h5></div>
            <div className="query">
                <div className="question">
                    <h3>{query.question}</h3>
                </div>
                <div className="buttons-query">
                    {answers.sort().map(answer => (
                        <ButtonAnswer key={answer} label={answer} click={response} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Query