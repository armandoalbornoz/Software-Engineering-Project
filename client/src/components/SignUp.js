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
import styled from "styled-components";



const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: rgb(14, 186, 201);
  }

  & .MuiOutlinedInput-root {
    color: white;
  }

  & .MuiInput-underline:after {
    border-bottom-color: rgb(14, 186, 201)  ;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: rgb(14, 186, 201);
    }
    &:hover fieldset {
      border-color: rgb(14, 186, 201);
    }
    &.Mui-focused fieldset {
      border-color: rgb(14, 186, 201);
    }
  }
`;


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

export default function SignUp() {
    
    const [name, setName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [error, setError] = React.useState('')
    const [isPending, setIsPending] = React.useState(false)
    const navigate = useNavigate();


    const handleSubmit = (e) =>
    {
        e.preventDefault();  // prevent page refresh
        const data = {name, lastName, email, password}
        setIsPending(true);

        fetch("http://localhost:8000/singup", {
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
      <Container component="main" maxWidth="xs" sx={{
          pt: { xs: 14, sm: 15 },
          pb: { xs: 8, sm: 30 },
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor:  "rgb(14, 186, 201)" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color={"rgb(200,200,200)"} >
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <WhiteBorderTextField
                  autoComplete="given-name"
                  InputLabelProps={{ style: { color: 'rgb(200, 200, 200)' } }} 
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteBorderTextField
                  required
                  fullWidth
                  InputLabelProps={{ style: { color: 'rgb(200, 200, 200)' } }} 

                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <WhiteBorderTextField
                  required
                  fullWidth
                  InputLabelProps={{ style: { color: 'rgb(200, 200, 200)' } }} 
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <WhiteBorderTextField
                  required
                  InputLabelProps={{ style: { color: 'rgb(200, 200, 200)' } }} 
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
         
            </Grid>

            {error && <Alert variant="filled" severity="error"> {error}</Alert>}
            {!isPending &&  <Button type="submit" style={{ backgroundColor: "rgb(14, 186, 201)"}}  fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign Up </Button>}
            {isPending &&  <Button type="submit" disabled fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign Up </Button>}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/signin" variant="body" color={'rgb(200, 200, 200)'} underline='hover' >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}