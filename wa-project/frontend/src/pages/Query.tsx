import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import ButtonAnswer from '../components/ButtonAnswer'
import { useQuestions } from '../context/Questions'
import './Query.css'

function Query() {
    let navigate = useNavigate()

    const [amount, setAmount] = useState(0)

    const [resultQuestions, setResultQuestions] = useState<Object[]>([])

    const [activeQuestion, setActiveQuestion] = useState(0)

    const { questions } = useQuestions()

    const [query, setQuery] = useState({
        category: 'Category',
        difficulty: 'Difficulty',
        question: 'How about a question?',
        correct_answer: 'Correct answer.',
        incorrect_answers: ['Incorrect answer 1.', 'Incorrect answer 2.']
    })

    const [answers, setAnswers] = useState(['Incorrect answer 1.', 'Incorrect answer 2.', 'Correct Answer'])

    useEffect(() => {
        setQuery(questions[activeQuestion])
    }, [activeQuestion])

    useEffect(() => {
        let array = questions[activeQuestion].incorrect_answers
        array.push(questions[activeQuestion].correct_answer)
        setAnswers(array)
    }, [activeQuestion])

    useEffect(() => {
        setAmount(questions.length)
    }, [])

    const addResult = (resp: string) => {
        let result = resultQuestions
        const resultAtual = {
            question: query.question, 
            correct_answer: query.correct_answer,
            answer: resp,
            success: query.correct_answer === resp ? 1 : 0
        }
        result.push(resultAtual)
        setResultQuestions(result)
        console.log(resultQuestions)
    }
    
    const response = (resp: string) => {
        if (activeQuestion < (amount - 1)){
            addResult(resp)
            setActiveQuestion(activeQuestion + 1)
        }
        else {
            addResult(resp)
            const lastQuiz = {
                amount: amount,
                result: resultQuestions
            }
            localStorage.setItem('lastQuiz', JSON.stringify(lastQuiz))
            navigate('/result')
        }
    }

    return (
        <div className="content">
            <div className="label"><h5>{query.category + 1} ({query.difficulty})</h5></div>
            <div className="query">
                <div className="question">
                    <h3><strong>{activeQuestion + 1}.{amount} -</strong> {query.question}</h3>
                </div>
                <div className="buttonsQuery">
                    {answers.sort().map(answer => (
                        <ButtonAnswer key={answer} label={answer} click={response} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Query