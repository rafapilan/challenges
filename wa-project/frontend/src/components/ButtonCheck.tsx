import Button from '@material-ui/core/Button';
import './Button.css'

interface ButtonProps {
    label: string
    color: "primary" | "default"
    onClick?: () => void

}

function ButtonCheck(props: ButtonProps) {
    return (
        <Button className="button" variant="contained" color={props.color} onClick={props.onClick}>
            {props.label}
        </Button>
    )
}

export default ButtonCheck