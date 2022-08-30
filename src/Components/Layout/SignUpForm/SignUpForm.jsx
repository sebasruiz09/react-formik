import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./SignUpForm.scss";
import axios from "axios";

export const SignUpForm = () => {
  const sendUserData = (values) => {
    let data = JSON.stringify({ user: values.name, password: values.password });
    console.warn(data);
    // let url = "axios URL";

    // axios.post(url, JSON.stringify({
    //     user : values.name,
    //     password : values.password
    //   }))
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
        if (!values.name) {
          errors.name = "required";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          errors.name = "can only contain letters and spaces";
        }
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
