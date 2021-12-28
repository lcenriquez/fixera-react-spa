import { useDispatch } from 'react-redux';
import { signOut } from '../actions';
import Nav from '../components/Nav';

function ProtectedRoute({ children }) {
  let dispatch = useDispatch();

  return (
    <>
      <Nav signOut={() => dispatch(signOut())} />
      {children}
    </>
  );
}

export default ProtectedRoute;