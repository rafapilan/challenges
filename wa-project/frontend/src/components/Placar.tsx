import PropsPlacar from '../interfaces/PropsPlacar'
import './Placar.css'

function Placar (props: PropsPlacar) {
    return (
        <div className={`placar ${props.color}`}>
            <h3 className={props.color}>{props.label}</h3>
            <h1 className={props.color}>{props.value}{props.complement ? props.complement : ''}</h1>
        </div>
    )
}

export default Placar