import PlayArrow from '@material-ui/icons/PlayArrow';
import List from '@material-ui/core/List';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Placar from '../components/Placar'
import './Result.css'
import ListResult from '../components/ListResult'

interface QuestionsLS {
    question: string
    correct_answer: string
    answer: string
    success: number
}

interface ResultLS {
    amount: number,
    result: QuestionsLS[]
}

function Result() {
    const [lastResult, setLastResult] = useState<ResultLS>({
        amount: 0,
        result: []
    })

    const [score, setScore] = useState({
        score: 0,
        success: 0,
        errors: 0
    })

    useEffect(() => {
        const localStorageResult = localStorage.getItem('lastQuiz')
        if (localStorageResult !== null)
            setLastResult(JSON.parse(localStorageResult))
    }, [])

    useEffect(() => {
        const calcScore = {
            score: (lastResult.result.reduce((count, question) => count + question.success, 0) / lastResult.amount) * 100,
            success: lastResult.result.reduce((count, question) => count + question.success, 0),
            errors: lastResult.amount - lastResult.result.reduce((count, question) => count + question.success, 0)
        }
        setScore(calcScore)
    }, [lastResult])

    return (
        <div className="content">
            <div className="labelResult">
                <h3>LAST RESULT (Pontuaction): {lastResult.amount} questions answered.</h3>
            </div>
            <div className="result">
                <div className="score">
                    <Placar label={'SCORE: '} value={+score.score.toFixed(0)} complement={'%'} color={'blue'} />
                    <Placar label={'Success: '} value={score.success} color={'green'} />
                    <Placar label={'Errors: '} value={score.errors} color={'red'} />
                    <Link className="link" to={'/'}>
                        <div className="goHome">
                            <strong><PlayArrow fontSize="inherit" className="iconPlay" /></strong>
                            <h2>Start again</h2>
                        </div>
                    </Link>
                </div>
                <div className="tableResult">
                    <List>
                        {lastResult.result.map(query => {
                            return (
                                <ListResult {...query}/>
                            )
                        })}
                    </List>
                </div>
            </div>
        </div>
    )
}

export default Result