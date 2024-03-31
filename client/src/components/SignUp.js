import * as React from 'react';
import {useNavigate} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { signup, error, isPending, useSignup } from "../customHooks/useSignup";

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    
    const [name, setName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [sex, setSex] = React.useState('')
    const {signup, error, isPending} = useSignup()

    const navigate = useNavigate();


    const handleSubmit = async (e) =>
    {
        e.preventDefault();  // prevent page refresh
        await signup(name, lastName, email, password, sex)
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
              <Grid item xs={12}>
                <FormLabel id="demo-radio-buttons-group-label" sx={{color:'rgb(200, 200, 200)' , }}>Sex</FormLabel>
                <RadioGroup
                  onChange={(e) => setSex(e.target.value)}
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{color:'rgb(200, 200, 200)' , }}
                >
                  <FormControlLabel value="female"  control={<Radio sx={{color:"rgb(14, 186, 201)" , }}/>} label="Female"  sx={{color:'rgb(200, 200, 200)' , }}/>
                  <FormControlLabel value="male"   control={<Radio sx={{color:"rgb(14, 186, 201)" , }}/>} label="Male"    sx={{color:'rgb(200, 200, 200)' , }}/>


                </RadioGroup>

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