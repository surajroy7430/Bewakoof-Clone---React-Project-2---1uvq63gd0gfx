import React from 'react';
import { 
    Typography, 
    Paper, 
    Avatar, 
    FormControl, 
    InputLabel,
    Input,
    Button
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { LockOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'block',
        marginTop: '6em',
        marginBottom: '7em',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
            width: 500,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const Login = () => {
    const classes = useStyles();
  return (
    <main className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography component='h1' variant='h5'>Log in to your account</Typography>
            <Typography variant='p'>for Latest trends, exciting offers and everything Bewakoof®!</Typography>

            <form className={classes.form}>
                <FormControl fullWidth required margin='normal'>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input 
                        id='email' 
                        name='email' 
                        autoComplete='off' 
                        autoFocus
                    />
                </FormControl>
                <FormControl fullWidth required margin='normal'>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input 
                        id='password' 
                        name='password' 
                        autoComplete='off' 
                        autoFocus
                    />
                </FormControl>
                <Button 
                    className={classes.submit}
                    type='submit' 
                    fullWidth
                    variant='contained'>
                    <Typography>Log In</Typography>
                </Button>
                <Link to='/forget'>Forgot Password?</Link>
            </form>
        </Paper>
    </main>
  )
}

export default Login
