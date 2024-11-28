import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from 'react-router-dom'
import { register } from '../API/auth';
import { useMutation } from "@tanstack/react-query"
import React from 'react';

const Register = () => {
    const navigate = useNavigate()

    const mutation = useMutation({
            mutationFn: (formData) => register(formData),
            onSuccess: () => {
                navigate("/")
            },
        })

    const handleSubmit = (formData) => {
            mutation.mutate(formData)
            console.log(formData)
        }

    return (
        <div className="mobile">
        <h1 className='heading'>Register to your account</h1>
        <p className='msg'> Already registered ? <br></br> <NavLink to="/Login">Click Here</NavLink></p>
        < Formik
                initialValues={{ username: "", password: "", image: "" }
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
                    <Field
                        type="text"
                        name="image"
                        placeholder='image'
                    />
                <button type="submit">Register</button>
                </Form>
            </Formik >
            </div>
  );
};


export default Register