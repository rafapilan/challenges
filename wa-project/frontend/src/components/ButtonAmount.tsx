import Button from '@material-ui/core/Button';
import './Button.css'

interface ButtonProps {
    label: number
    click: any
}

function ButtonAmount(props: ButtonProps) {
    return (
        <Button className="button" variant="outlined" color="primary" onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </Button>
    );
}

export default ButtonAmount
