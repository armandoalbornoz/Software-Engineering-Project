import * as React from 'react';
import {useNavigate} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link as RouterLink, } from 'react-router-dom';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        BMI Tracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [error, setError] = React.useState('')
    const [isPending, setIsPending] = React.useState(false)
    const navigate = useNavigate();


    const handleSubmit = (e) =>
    {
        e.preventDefault();  // prevent page refresh
        const data = {email, password}
        setIsPending(true);

        fetch("http://localhost:8000/signin", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (!res.ok)
            {
                console.log(res);
                throw Error("Could not send the data to the server.")
            } 
            setIsPending(false);
            navigate("/")

        })
        .catch((err) =>{
            setError(err.message)
        })

    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {error && <Alert variant="filled" severity="error"> {error}</Alert>}
            {!isPending &&  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign In </Button>}
            {isPending &&  <Button type="submit" disabled fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign In </Button>}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}