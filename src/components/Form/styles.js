import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root: {
        '& .MuiTextFeild-root': {
            margin: theme.spacing(1),
        },
    },
    paper:{
        padding: theme.spacing(2),
    },
    form:{
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'center',
    },
    fileInput:{
        widht: '97%',
        margin: '10px 0',
    },
    buttonSumit:{
        marginBottom:10,
    }
}));