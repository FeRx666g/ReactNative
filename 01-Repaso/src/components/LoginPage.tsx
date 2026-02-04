import React from 'react'
import { useAuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    const { status } = useAuthContext();

  return (
    <>
        <h3>Login Page</h3>
        <p>{status}</p>
    </>
  )
}
