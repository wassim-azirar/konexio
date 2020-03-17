import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

const Subscription = () => {
  return (
    <div>
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
          if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) === false) {
            errors.email = 'This email address is invalid';
          }
          if (values.password !== values.passwordConfirmation) {
            errors.password = 'The password verification should match your password';
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
          <Container component='main' maxWidth='sm'>
            <div style={{ marginTop: 10 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='firstName'
                      name='firstName'
                      label='First Name'
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='lastName'
                      name='lastName'
                      label='Last Name'
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='email'
                      name='email'
                      label='Email Address'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='password'
                      name='password'
                      label='Password'
                      type='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='passwordConfirmation'
                      name='passwordConfirmation'
                      label='Password confirmation'
                      type='password'
                      value={values.passwordConfirmation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && touched.passwordConfirmation && errors.password}
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant='outlined' fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        variant='outlined'
                        required
                        id='status'
                        name='status'
                        label='Status'
                        value={values.status}
                        onChange={handleChange}>
                        <MenuItem value={'teacher'}>Teacher</MenuItem>
                        <MenuItem value={'teacherAssistant'}>Teacher assistant</MenuItem>
                        <MenuItem value={'student'}>Student</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id='newsletter'
                          name='newsletter'
                          value='newsletter'
                          checked={values.newsletter}
                          onChange={handleChange('newsletter')}
                        />
                      }
                      label='Subscribe to newsletter'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id='acceptTerms'
                          name='acceptTerms'
                          value='acceptTerms'
                          checked={values.acceptTerms}
                          onChange={handleChange('acceptTerms')}
                        />
                      }
                      label='I have read terms and conditions'
                    />
                  </Grid>
                </Grid>
                <Button type='submit' disabled={isSubmitting} fullWidth variant='contained' color='primary'>
                  Sign Up
                </Button>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </form>
            </div>
          </Container>
        )}
      </Formik>
    </div>
  );
};

Subscription.propTypes = {
  name: PropTypes.string.isRequired
};

export default Subscription;
