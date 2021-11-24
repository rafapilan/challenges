import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Buttons from '../components/Buttons'
import { useQuestions } from '../context/Questions'
import './Quiz.css'

function Quiz() {
    let navigate = useNavigate()

    const { amount } = useParams()

    const [resultQuestions, setResultQuestions] = useState<Object[]>([])

    const [activeQuestion, setActiveQuestion] = useState(0)

    const { questions } = useQuestions()

    const [quiz, setQuiz] = useState({
        category: 'Category',
        difficulty: 'Difficulty',
        question: 'How about a question?',
        correct_answer: 'Correct answer.',
        incorrect_answers: ['Incorrect answer 1.', 'Incorrect answer 2.']
    })

    const [answers, setAnswers] = useState(['Incorrect answer 1.', 'Incorrect answer 2.', 'Correct Answer'])

    useEffect(() => {
        setQuiz(questions[activeQuestion])
    }, [activeQuestion])

    useEffect(() => {
        let array = questions[activeQuestion].incorrect_answers
        array.push(questions[activeQuestion].correct_answer)
        setAnswers(array)
    }, [activeQuestion])

    const addResult = (resp: string) => {
        let result = resultQuestions
        const resultAtual = {
            question: quiz.question,
            correct_answer: quiz.correct_answer,
            answer: resp,
            success: quiz.correct_answer === resp ? 1 : 0
        }
        result.push(resultAtual)
        setResultQuestions(result)
    }

    const response = (resp: string) => {
        if (amount) {
            if (activeQuestion < (+amount - 1)) {
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
    }

    return (
        <div className="content">
            <div className="label"><h5>{quiz.category + 1} ({quiz.difficulty})</h5></div>
            <div className="quiz">
                <div className="question">
                    <h3><strong>{activeQuestion + 1}.{amount} -</strong> {quiz.question}</h3>
                </div>
                <div className="buttonsQuiz">
                    {answers.sort().map(answer => (
                        <Buttons key={answer} variant="outlined" color="primary" label={answer} click={response} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Quiz