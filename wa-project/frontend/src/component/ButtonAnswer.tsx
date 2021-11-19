import Button from '@material-ui/core/Button';
import './Button.css'

interface PropsButton {
    label: string
}

function ButtonAnswer(props: PropsButton) {
    return (
        <Button className="button" variant="outlined" color="primary">{props.label}</Button>
    );
}

export default ButtonAnswer