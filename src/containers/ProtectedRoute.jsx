import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../actions';
import Nav from '../components/Nav';

function ProtectedRoute({ children }) {
  let dispatch = useDispatch();
  let darkModeEnabled = useSelector(state => state.darkModeEnabled);

  return (
    <>
      <Nav theme={darkModeEnabled ? "dark" : "light"} signOut={() => dispatch(signOut())} />
      {children}
    </>
  );
}

export default ProtectedRoute;