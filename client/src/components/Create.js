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
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';


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
    
    const [height, setHeight] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const [message, setMessage] = React.useState('')

    const [error, setError] = React.useState('')
    const [isPending, setIsPending] = React.useState(false)
    const navigate = useNavigate();


    const handleSubmit = (e) =>
    {
        e.preventDefault();  // prevent page refresh
        const data = {height, weight, message}
        setIsPending(true);

        fetch("http://localhost:8000/medicalInfo", {
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
          pb: { xs: 8, sm: 5 },
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
          <Avatar sx={{ m: 1, bgcolor: "rgb(14, 186, 201)" }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Medical Record
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="height"
                  required
                  fullWidth
                  id="height"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                  }}                 
                label="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  autoFocus
                  type='number'

                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Weight"
                  type='number'
                  label="Weight"
                  name="Weight"
                  autoComplete="family-name"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                  }}    
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  fullWidth
                  id="Message"
                  label="Message"
                  name="Message"
                  autoComplete="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
          
         
            </Grid>

            {error && <Alert variant="filled" severity="error"> {error}</Alert>}
            {!isPending &&  <Button style={{ backgroundColor: "rgb(14, 186, 201)"}} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Create </Button>}
            {isPending &&  <Button bgcolor="rgb(14, 186, 201)"  type="submit" disabled fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Create </Button>}

    
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}