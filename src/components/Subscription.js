import { Box, Button, Checkbox, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

const Subscription = () => {
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          status: '',
          newsletter: true,
          acceptTerms: false
        }}
        validate={values => {
          const errors = {};
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid or empty email address';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Box component='span' m={1}>
                First name
              </Box>
              <TextField
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}></TextField>
            </div>
            <div>
              Last name:
              <TextField
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}></TextField>
            </div>
            <div>
              <input type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </div>
            <Checkbox checked={values.newsletter} onChange={handleChange} value={values.newsletter} />
            <Button type='submit' disabled={isSubmitting} variant='contained' color='primary'>
              Submit
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
};

Subscription.propTypes = {
  name: PropTypes.string.isRequired
};

export default Subscription;
