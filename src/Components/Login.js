import { Field, Form, Formik } from "formik";
import { login } from '../API/auth';
import { useMutation } from '@tanstack/react-query';
import { NavLink, useNavigate } from 'react-router';
import React, { useState } from 'react';

const Login = () => {

    const navigate = useNavigate()

    const [invalidPass, setInvalidPass] = useState(false)

    const mutation = useMutation({
            mutationFn: (formData) => login(formData),
            onSuccess: () => {
                alert("Logged In")
                navigate("/Home")
            },
            onError: () => setInvalidPass(true)
        })

    const handleSubmit = (formData) => {
            mutation.mutate(formData)
            console.log(formData)
        }

    return (
        <div className="main">
        <div className="mobile">
        <h1 className='heading'>Login to your account</h1>
        <p className='msg'> not yet registered ? <br></br> <NavLink to="/">Click Here</NavLink></p>
        {/* { !invalidPass && <p>Invalid User or Password</p>} */}
        < Formik
                initialValues={{ username: "", password: ""}
                }
                onSubmit={handleSubmit}
            >
                <Form className="screen">
                    <Field
                        type="text"
                        name="username"
                        placeholder='username'
                        className="username"
                    />
                    <Field
                        type="password"
                        name="password"
                        placeholder='password'
                        className="password"
                    />
                <button type="submit">Login</button>
                </Form>
            </Formik >
            </div>
            </div>
  );
};


export default Login