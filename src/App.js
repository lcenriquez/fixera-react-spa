import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './containers/Home';
import ProtectedRoute from './containers/ProtectedRoute';
import SignIn from './containers/SignIn';
import Dashboard from './components/Dashboard';
import theme from './helpers/theme';
import logo from './logo.svg';
import './App.css';

function PrivateOutlet() {
  let location = useLocation();
  let user = useSelector(state => state.user);
  return user.isLoggedIn ? <Outlet /> : <Navigate to="/signin" state={{ path: location.pathname }} />;
}

function App() {
  let darkModeEnabled = useSelector(state => state.darkModeEnabled);

  window.matchMedia("(prefers-color-scheme: dark)").addListener(
    // TODO: Should update state when listener triggers action
    e => e.matches && theme.activateDarkMode()
  );
  window.matchMedia("(prefers-color-scheme: light)").addListener(
    // TODO: Should update state when listener triggers action
    e => e.matches && theme.deactivateDarkMode()
  );

  useEffect(() => {
    if(darkModeEnabled) {
      theme.activateDarkMode();
    } else {
      theme.deactivateDarkMode();
    }
  }, [darkModeEnabled]);

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