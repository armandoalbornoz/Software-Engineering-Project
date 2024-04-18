import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom"
import Highlights from './Highlights';import Divider from '@mui/material/Divider';
import bmiLogo from './images/BMI_Logo.png'
import { useAuthContext } from '../customHooks/useAuthContext';


export default function Hero() {

  const navigate = useNavigate();
  const {user} = useAuthContext()

  const handleButtonClick = () => {
    console.log("test")
    if (!user) {
      navigate("/signup");
    } else {
      navigate("/create");
    }
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode ===  `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',    
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: "rgb(34, 190, 200)"
              }}
            >
              BMI Tracker
            </Typography>
          </Typography>
          <Typography variant="body" textAlign="center" color="text.primary">
            Embark on a transformative journey with our cutting-edge BMI tracking app.
            <br/>
            Your ultimate companion in the quest for a healthier you. 
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            
            <Button  type="submit" style={{ color: "white", backgroundColor: "rgb(70, 120, 140)"}}  
              onClick={ handleButtonClick }  >
              Start now
            </Button>
          </Stack>

        </Stack>
        <Box
            
        />

              <img
                src={
                  bmiLogo
                }
                alt="logo"
                pad
              />
      </Container>
      <Divider />
      <Highlights />
      <Divider />


    </Box>

    
  );
}