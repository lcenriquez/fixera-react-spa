import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Nav from './components/Nav';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;