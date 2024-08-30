import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formikValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={formikValidationSchema}
      onSubmit={(values) => {
        console.log('Formik Form Data', values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
