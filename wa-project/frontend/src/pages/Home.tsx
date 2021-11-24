import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import axios from "axios"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import Buttons from "../components/Buttons"
import { useQuestions } from "../context/Questions"
import "./Home.css"

function Home() {
    let navigate = useNavigate()

    const { setQuestions, setOn } = useQuestions()

    /* , {
            headers: {
                'responseEncoding': 'utf8',
                'Content-type': 'charset=utf-8',
                'Accept': 'charset=utf-8'
            }
    } */

    const start = (n: number) => {
        axios.get(`https://opentdb.com/api.php?amount=${n}`)
            .then(response => {
                setQuestions(response.data.results)
                setOn(true)
                navigate(`/check/${n}`)
            })
            .catch(() => {
                console.log('tentando...')
                start(n)
            })
    }

    return (
        <div className="home">
            <h1>How many questions do you want to answer?</h1>
            <div className="buttonsHome">
                <Buttons variant="outlined" color="primary" label={'1'} click={start} />
                <Buttons variant="outlined" color="primary" label={'3'} click={start} />
                <Buttons variant="outlined" color="primary" label={'5'} click={start} />
                <Buttons variant="outlined" color="primary" label={'10'} click={start} />
                <Buttons variant="outlined" color="primary" label={'15'} click={start} />
                <Buttons variant="outlined" color="primary" label={'20'} click={start} />
                <Buttons variant="outlined" color="primary" label={'30'} click={start} />
            </div>
            {localStorage.getItem('lastQuiz') ? (
                <Link to="/result">
                    <div className="lastResult">
                        <PlaylistAddCheckIcon fontSize="large" className="iconResult" />
                        <h3>Last result</h3>
                    </div>
                </Link>
            ) : ''}
        </div>
    )
}

export default Home