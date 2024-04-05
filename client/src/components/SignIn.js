import * as React from 'react';
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
import { useLogin } from '../customHooks/useLogin';

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



export default function SignIn() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {login, error, isPending} = useLogin()


    const handleSubmit = async (e) =>
    {
      e.preventDefault()
      await login(email, password)
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs"
         sx={{
          pt: { xs: 14, sm: 15 },
          pb: { xs: 8, sm: "21%" },
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
          <Avatar sx={{ m: 1, bgcolor: 'rgb(54, 236, 201)' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5" color={"rgb(200,200,200)"}  >
            Sign in
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <WhiteBorderTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              InputLabelProps={{ style: { color: 'rgb(200, 200, 200)' } }} 
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <WhiteBorderTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              InputLabelProps={{ style: { color: 'rgb(200, 200, 200)'} }} 

              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {error && <Alert variant="filled" severity="error"> {error}</Alert>}
            {!isPending &&  <Button type="submit" style={{ backgroundColor: "rgb(14, 186, 201)"}} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign In </Button>}
            {isPending &&  <Button type="submit" disabled fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign In </Button>}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body" color={'rgb(200, 200, 200)'} underline='hover'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" color={'rgb(200, 200, 200)'} underline='hover' variant="body">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}