import ButtonAnswer from '../component/ButtonAnswer'
import './Query.css'

function Query () {

    const mockData = {
        "response_code": 0,
        "results": [
            {
                "category": "General Knowledge",
                "type": "boolean",
                "difficulty": "easy",
                "question": "French is an official language in Canada.",
                "correct_answer": "True",
                "incorrect_answers": [
                    "False"
                ]
            },
            {
                "category": "Entertainment: Television",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Dee from &quot;It&#039;s Always Sunny in Philadelphia&quot; has dated all of the following guys EXCEPT",
                "correct_answer": "Matthew &quot;Rickety Cricket&quot; Mara",
                "incorrect_answers": [
                    "Colin the Thief",
                    "Ben the Soldier",
                    "Kevin Gallagher aka Lil&#039; Kevin"
                ]
            },
            {
                "category": "History",
                "type": "multiple",
                "difficulty": "hard",
                "question": "The main objective of the German operation &quot;Case Blue&quot; during World War II was originally to capture what?",
                "correct_answer": "Caucasus",
                "incorrect_answers": [
                    "Stalingrad",
                    "Crimea",
                    "Voronezh"
                ]
            }
        ]
    }

    return (
        <div className="content">
            <div className="label"><h5>{mockData.results[2].category} ({mockData.results[2].difficulty})</h5></div>
            <div className="query">
                <div className="question">
                    <h3>Pergunta graaaandeeeee huhiuhiuhy ygu ygiuhpiuh iuhhiujio hpiuhiuhiup hipuhiu igiuh iuhioho oi oiui0u oiuoiujoij oiuo uo9u0o9 uo9u09 u98 hiuphipuh iuhiuh iuhg hiuph iuh vyjkk oppou huyg?</h3>
                </div>
                <div className="buttons-query">
                    <ButtonAnswer label={'Já é!!!'} />
                    <ButtonAnswer label={'Só se for agora...'} />
                    <ButtonAnswer label={'To fora 8('} />
                    <ButtonAnswer label={'Deixa quieto, quem sabe outro dia...'} />
                </div>
            </div>
        </div>
    )
}

export default Query