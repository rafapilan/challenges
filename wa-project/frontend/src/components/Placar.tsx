import './Placar.css'

interface PropsPlacar {
    label: string
    value: number
    complement?: string
    color: string
}

function Placar (props: PropsPlacar) {
    return (
        <div className={`placar ${props.color}`}>
            <h3 className={props.color}>{props.label}</h3>
            <h1 className={props.color}>{props.value}{props.complement ? props.complement : ''}</h1>
        </div>
    )
}

export default Placar