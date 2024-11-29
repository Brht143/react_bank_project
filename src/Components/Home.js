import { Field, Form, Formik } from "formik";
import { checkToken, deleteToken } from '../API/storage'
import { deposit, getTransactions, withdraw } from '../API/user'
import { useNavigate } from 'react-router';
import Nav from './Nav'
import React, { useState } from 'react'
import { useMutation, useQuery } from "@tanstack/react-query";

const Home = () => {
  
    const navigate = useNavigate()
    
    const handleSubmit = (formData) => {
      console.log(formData.transactionSwitch)
      if (formData.transactionSwitch) depositMutation.mutate(formData)
      else withdrawMutation.mutate(formData)
    }

    const handleLogOut = () => {
      deleteToken()
      navigate("/Login")
      console.log("Log OUt")
    }


    const depositMutation = useMutation({
            mutationFn: (formData) => deposit(formData),
            onSuccess: () => {
                refetch()
                navigate("/Home")
            },
        })
    
    const withdrawMutation = useMutation({
            mutationFn: (formData) => withdraw(formData),
            onSuccess: () => {
                refetch()
                navigate("/Home")
            },
        })

    const {data, isFetching, isSuccess,refetch, isFetched} = useQuery({
          queryKey: ["DataList"],
          queryFn: getTransactions,
          enabled: true,
        }) 
    

    const initialValue = 0;
    const balance = data?.map(transaction => transaction.type === "deposit" ? transaction.amount : -transaction.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);

    if (!checkToken()) return <navigate to="/login" />
    
    return (
    <div className="main">
      <div className="mobile">
        <Nav />
        <div className='screen'>
          <div className="available">
            <h1>Your Available Balance</h1> 
            <p>{balance} KWD</p>
          </div>
        <div className="transaction">
        <Formik
          initialValues={{transaction: '',amount : ""}}
          onSubmit={handleSubmit}
        >
          <Form>
            <label className="transaction-switch">
              <Field type="checkbox" name="transactionSwitch"/>
              <span class="slider"></span>
            </label>
            <label className="amount">
              Amount
              <Field type="text" name="amount"/>
            </label>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
            <button onClick={handleLogOut} className="logout" >Log out</button>
    </div>
  </div>
    </div>
  </div>
  )
}

export default Home 
