import { Field, Form, Formik } from "formik";
import { checkToken } from '../API/storage'
import { deposit, withdraw } from '../API/user'
import { NavLink, useNavigate } from 'react-router';
import Nav from './Nav'
import React, { useState } from 'react'
import { useMutation } from "@tanstack/react-query";

const Home = () => {

    const navigate = useNavigate()

    const depositMutation = useMutation({
            mutationFn: (formData) => deposit(formData),
            onSuccess: () => {
                navigate("/Home")
            },
        })
    
    const withdrawMutation = useMutation({
            mutationFn: (formData) => withdraw(formData),
            onSuccess: () => {
                navigate("/Home")
            },
        })


    const handleSubmit = (formData) => {
            if (formData.transaction === "deposit") depositMutation.mutate(formData)
            else withdrawMutation.mutate(formData)
                }

    if (!checkToken())
        {
            return <navigate to="/login" />
        }
    
    return (
    <div className="main">
    <div className="mobile">
        <Nav />
    <div className='screen'>
    <div className="available">
        <h1>Your Available Balance</h1> 
        <p>19000 KWD</p>
        </div>
    <div className="transaction">

    <Formik
      initialValues={{
        transaction: '',
        amount : ""
      }}
      onSubmit={handleSubmit}
    >
        <Form>
            <label>
              <Field type="radio" name="transaction" value="deposit" className="type"/>
              Deposit
            </label>
            <label>
              <Field type="radio" name="transaction" value="withdraw" className="type"/>
              Withdraw
            </label>
            <label className="amount">
              Amount
              <Field type="text" name="amount"/>
            </label>
          <button type="submit">Submit</button>
        </Form>
    </Formik>
    </div>



  </div>
  </div>
  </div>
  )
}

export default Home
