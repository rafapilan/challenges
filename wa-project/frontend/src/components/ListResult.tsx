import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Cancel from '@material-ui/icons/Cancel'
import Check from '@material-ui/icons/Check'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Close from '@material-ui/icons/Close'
import { useState } from 'react'

interface QuestionsLS {
    question: string
    correct_answer: string
    answer: string
    success: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(9),
    },
  }),
);

function ListResult(params: QuestionsLS) {
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    };

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    {params.success === 1 ? 
                        <CheckCircle style={{color:'#388e3c'}} color="inherit" /> : 
                        <Cancel style={{color:'#dc004e'}} color="inherit" />}
                    
                </ListItemIcon>
                <ListItemText primary={params.question} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Check style={{color:'#388e3c'}} color="inherit" />
                        </ListItemIcon>
                        <ListItemText style={{color:'#388e3c'}} color="inherit" primary={params.correct_answer} />
                    </ListItem>
                </List>
            </Collapse>
            {params.success === 1 ? '' : (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Close style={{color:'#dc004e'}} color="inherit" />
                            </ListItemIcon>
                            <ListItemText style={{color:'#dc004e'}} color="inherit" primary={params.answer} />
                        </ListItem>
                    </List>
                </Collapse>
            )}
        </>

    );
}

export default ListResult