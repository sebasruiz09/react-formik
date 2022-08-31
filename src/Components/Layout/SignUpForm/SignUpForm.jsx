import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./SignUpForm.scss";
import axios from "axios";

export const SignUpForm = () => {
  const sendUserData = (values) => {
    let URL = "http://localhost:3002/login";
    axios.post(URL , {
      email  : values.user,
      password : values.password
    }).then(
      response => {
        console.warn(response.message);    
      }
    ).catch(err => {
      console.warn(err.message);
    })
  };

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        //username validate
        
        //errors logic
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        sendUserData(values);
      }}
    >
      {({ errors }) => (
        <Form className="form-content">
          <h2>Welcome back</h2>
          <p>Please enter your details</p>
          <Field type="text" name="name" placeholder="username" />
          <ErrorMessage
            name="name"
            component={() => (
              <div>
                <h2>{errors.name}</h2>
              </div>
            )}
          />
          <Field type="password" name="password" placeholder="password" />
          <button type="submit">Continue</button>
        </Form>
      )}
    </Formik>
  );
};
