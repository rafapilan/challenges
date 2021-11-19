import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Button.css'

interface ButtonProps {
    label: string
    color: "primary" | "default"
    path: string
}

function ButtonCheck(props: ButtonProps) {
    return (
        <Link to={props.path}>
            <Button className="button" variant="contained" color={props.color}>{props.label}</Button>
        </Link>
    );
}

export default ButtonCheck