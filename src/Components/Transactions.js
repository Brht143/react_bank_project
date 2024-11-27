import { Field, Form, Formik } from "formik";
import { Navigate } from 'react-router'
import { checkToken } from '../API/storage'
import { getTransactions } from '../API/user'
import Nav from './Nav'
import React, { useState } from 'react'
import { useQuery } from "@tanstack/react-query";


const Transactions = () => {
  

  const [search, setSearch] = useState("")
  const [type, setType] = useState("")
  const [fromDate, setFrom] = useState("")
  const [toDate, setTo] = useState("")
  
  const handleSearch = (event) =>setSearch(event.target.value)
  const handleType = (event) => setType(event.target.value)
  const handleFromDate = (event) => setFrom(event.target.value)
  const handleToDate = (event) => setTo(event.target.value)
  
  const {data, isFetching, isSuccess,refetch, isFetched} = useQuery({
    queryKey: ["DataList"],
    queryFn: getTransactions,
    enabled: true,

  })  

  // console.log(data.type) >> Array of Transactions Objects
  // data._id, data.type, data.amount, data.from, data.to, data.createdAt, data.updatedAt, data.__v >> Object keys
 
  if (isFetching) {
    return <div>Loading...</div>;
  }

  // if (isFetched) {
  //   return <div>Success...</div>;
  // }

  // const text = "2024-11-23"
  // console.log("year", text.substring(0,4))
  // console.log("month", text.substring(5,7))
  // console.log("day", text.substring(8,10))

  const transactionsType = data?.filter( transaction => transaction.type.includes(type))
  
  const transactionsSearch = search ? transactionsType.filter( transaction => search == transaction.amount): transactionsType

  const transactionsFrom = fromDate ? transactionsSearch.filter( transaction => transaction.createdAt.substring(transaction.createdAt,transaction.createdAt.indexOf("T")) >= fromDate): transactionsSearch
   
  const transactionsTo = toDate ? transactionsFrom.filter( transaction => transaction.createdAt.substring(transaction.createdAt,transaction.createdAt.indexOf("T")) <= toDate ): transactionsFrom

  const transactions = transactionsTo.map( transaction => 
    <div className="transaction-item">
      <div className="amount">{transaction.amount}</div>
      <div className="type">{transaction.type}</div>
      <div className="created">
        {transaction.createdAt.substring(transaction.createdAt,transaction.createdAt.indexOf("T"))}
      </div>
    </div>
  )

 

  if (!checkToken())
    {
        return <Navigate to="/login" />
    }

    return (
      <div className="main">
      <div class="mobile">
        <Nav />
        <div class="search">
          <input onChange={handleSearch} type="text" placeholder='search'></input> 
          <button>Search</button>
        </div>
        <div className='filter'>
        <Formik
          initialValues={{transaction: '', }}
    >
        <Form>
        <label>
              <Field onClick={handleType} type="radio" name="transaction" value="" className="type"/>
              All
            </label>
            <label>
              <Field onClick={handleType} type="radio" name="transaction" value="deposit" className="type"/>
              Deposit
            </label>
            <label>
              <Field onClick={handleType} type="radio" name="transaction" value="withdraw" className="type"/>
              Withdraw
            </label>
            <label>
              <Field onClick={handleType} type="radio" name="transaction" value="transfer" className="type"/>
              Transfer
            </label>
            <div class="transaction-date">
              <label className="transaction-from">
                From
                <Field onChange={handleFromDate} type="date" name="transaction-from" value="from" className="type"/>
              </label>
              <label className="transaction-to">
                To
                <Field onChange={handleToDate} type="date" name="transaction-to" value="to" className="type"/>
              </label>
              <button onClick={refetch}></button>
            </div>
        </Form>
    </Formik>
            <div className="transactions-list">
            {transactions}
            </div>
       
        </div>
      </div>
      </div>

  )
}



export default Transactions