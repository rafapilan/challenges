import Button from '@material-ui/core/Button';
import ButtonProps from '../interfaces/ButtonProps';
import './Button.css'

function Buttons(props: ButtonProps) {
    return (
        <Button className="buttons" variant={props.variant} color={props.color} onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </Button>
    )
}

export default Buttons