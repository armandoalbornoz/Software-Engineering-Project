import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Create from './Create';
import MedInfo from './MedInfo'
import NotFound from './NotFound';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Tem from './tempCom/Tem'
import AppAppBar from './AppAppBar';
import Footer from './Footer';
import getLPTheme from '../getLPTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Records from './Records'
import Hero from './Hero';
import {useAuthContext} from '../customHooks/useAuthContext'



function App() {
  const LPtheme = createTheme(getLPTheme('dark'));
  const {user} = useAuthContext()

  return (
    <ThemeProvider theme={LPtheme}> 
    <CssBaseline />

    <Router>
        <AppAppBar/>
        <Box sx={{ bgcolor: 'background.default' }}>
          <Routes>
            <Route path="/signin" element={user ? <Navigate to={"/"}/> : <SignIn/> } />
            <Route path="/signup" element={user ? <Navigate to={"/"}/>  : <SignUp/>} />
            <Route path="/" element={<Hero/>} />
            <Route path="/create" element={user ? <Create/> :  <Navigate to={"/signin"}/>} />
            <Route path="/records/:id" element={user ? <MedInfo/> : <Navigate to={"/signin"}/>} />
            <Route path="/records" element={user ?  <Records/> : <Navigate to={"/signin"}/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        <Footer/>
        </Box>
    </Router>
    </ThemeProvider>
  );}

export default App;
