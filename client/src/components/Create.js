import * as React from 'react';
import {useNavigate} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import {useAuthContext} from '../customHooks/useAuthContext'


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

export default function Create() {
    
    const [height, setHeight] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const [message, setMessage] = React.useState('')
    const {user} = useAuthContext()


    const [error, setError] = React.useState('')
    const [isPending, setIsPending] = React.useState(false)
    const navigate = useNavigate();


    const handleSubmit = (e) =>
    {
        e.preventDefault();  // prevent page refresh

        if(!user)
        {
          setError("You must be logged in")
          return
        }

        const data = {height, weight, message}
        setIsPending(true);

        fetch("http://localhost:3001/records", {
            method: "POST",
            
            headers: {
              "Content-Type":"application/json",
              'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (!res.ok)
            {
                console.log(res);
                setIsPending(false);
                throw Error("Height and Weight are required")
            } 
            setIsPending(false);
            navigate("/records")

        })
        .catch((err) =>{
            setIsPending(false);
            setError(err.message)
        })

    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{
          pt: { xs: 14, sm: 15 },
          pb: { xs: 8, sm: 40 },
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
          <Typography component="h1" variant="h5" color={"rgb(200,200,200)"}>
            Add Medical Record
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <WhiteBorderTextField
                  name="height"
                  required
                  fullWidth
                  InputLabelProps={{ style: { color: 'rgb(200, 200, 200)' } }}
                  id="height"
                   
                label="Height (cm)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  autoFocus
                  type='number'

                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <WhiteBorderTextField
                  required
                  fullWidth
                  id="Weight"
                  type='number'
                  label="Weight (kg)"
                  name="Weight"
                  autoComplete="family-name"  
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  InputLabelProps={{ style: { color: 'rgb(200, 200, 200)' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <WhiteBorderTextField
                  InputLabelProps={{ style: { color: 'rgb(200, 200, 200)' } }}
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