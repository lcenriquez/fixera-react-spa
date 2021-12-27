import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './containers/Home';
import ProtectedRoute from './containers/ProtectedRoute';
import SignIn from './containers/SignIn';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
import './App.css';

function PrivateOutlet() {
  let location = useLocation();
  let user = useSelector(state => state.user);
  return user.isLoggedIn ? <Outlet /> : <Navigate to="/signin" state={{ path: location.pathname }} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signout" element={<Navigate to="/signin" />} />
      <Route path="/app" element={<PrivateOutlet />}>
        <Route path="" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="test" element={<ProtectedRoute />} />
      </Route>
    </Routes>
  );
}

export default App;