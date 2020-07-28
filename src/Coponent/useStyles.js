import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow: 2,
        paddingLeft:230,
    },
    paper: {
        padding: theme.spacing(2),    
        textAlign: 'left',
        width: 650,
        height: 250,
        
        
    },
    }));

export default useStyles;

