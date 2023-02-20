import logo from './logo.svg';
import './App.css';
import Video from './Components/Video';
import { Route, Router } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Route path='/' element={<Login />} />
    </Router>
  );
}

export default App;
