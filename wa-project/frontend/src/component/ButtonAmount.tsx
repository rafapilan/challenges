import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Button.css'

interface ButtonProps {
    label: number
}

function ButtonAmount(props: ButtonProps) {
    return (
        <Link to={`/check/${props.label}`}>
            <Button className="button" variant="outlined" color="primary">{props.label}</Button>
        </Link>
    );
}

export default ButtonAmount