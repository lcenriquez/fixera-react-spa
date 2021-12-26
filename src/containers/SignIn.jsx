import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../actions';
import SignInForm from '../components/SignInForm';


function SignIn() {
  let [ input, setInput ] = useState({username: '', password: ''});
  let dispatch = useDispatch();
  let dataRedux = useSelector(state => state.user);
  let navigate = useNavigate();

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.id]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signIn(input));
  }

  useEffect(() => {
    if(dataRedux.username != '') {
      navigate("/app");
    }
  }, [dataRedux])

  return (
    <SignInForm handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};

export default SignIn;