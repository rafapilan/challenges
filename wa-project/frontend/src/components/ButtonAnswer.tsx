import Button from '@material-ui/core/Button';
import './Button.css'

interface PropsButton {
    label: string
    click: any
}

function ButtonAnswer(props: PropsButton) {
    return (
        <Button className="button" variant="outlined" color="primary" onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </Button>
    );
}

export default ButtonAnswer
