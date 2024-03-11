import './Navbar'
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './Create';
import UserMedInfo from './UserMedInfo';
import NotFound from './NotFound';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Tem from './Tem'
import AppAppBar from './AppAppBar';
import Footer from './Footer';

function App() {
  const title = "Welcome to the app"
  return (
    <Router>
      <div className="App">
        <AppAppBar/>
        <div className="content">
          <Routes>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/medical-information/:id" element={<UserMedInfo/>} />
            <Route path="/template" element={<Tem/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
