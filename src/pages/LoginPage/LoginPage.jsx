import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser, selectCurrentUser } from '../../user/userSlice' 
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormGroup, Label } from 'reactstrap' 
import { validateUserLoginForm } from '../../utilities/validateUserLogin'
import './LoginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch(); 

  const handleLogin = (values) => {
    const currentUser = {
      id: Date.now(),
      email: values.email,
      password: values.password
    }
    dispatch(setCurrentUser(currentUser))
  }
  
  return (
    <div className='login-container'>
      <h1>Player Tracker</h1>
      <h2>Your single source for NFL player information and player tracking </h2>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={validateUserLoginForm}
        onSubmit={handleLogin}
      >
      {({ values }) => (
        <Form className='form flex flex-col items-center'>
          <FormGroup className='flex flex-col'>
            <Label htmlFor='email'>Email</Label><br />
            <Field 
            type='email' 
            name='email' 
            className='form-control'
            placeholder='Enter Email...'></Field>
            <ErrorMessage name='email'></ErrorMessage>
          </FormGroup>
          <FormGroup className='flex flex-col'>
            <Label htmlFor='password'>Password</Label><br />
            <Field 
            type='password' 
            name='password'
            className='form-control' 
            placeholder='Enter Password...'></Field>
            <ErrorMessage name='password'></ErrorMessage>
          </FormGroup>
          <Link to='/homepage'>
            <button id='form-btn' 
                    type='submit' 
                    disabled={!values.email || !values.password}
                    >Login</button>
          </Link>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default LoginPage
