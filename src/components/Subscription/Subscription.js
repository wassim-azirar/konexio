import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Formik } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import './Subscription.scss';

const validationRules = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  acceptTerms: yup.boolean().oneOf([true], 'You must accept terms and conditions')
});

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    height: theme.spacing(6)
  }
}));

const Subscription = () => {
  const classes = useStyles();

  return (
    <div>
      <Formik
        validateOnMount={true}
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
        validationSchema={validationRules}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
            toast.info('👍 Your registration has been sent', {
              position: 'bottom-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true
            });
          }, 3000);
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Container component='main' maxWidth='sm'>
            <div className='register-title'>Registration form</div>
            <div style={{ marginTop: 10 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant='outlined'
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
                    {touched.email && errors.email ? <div className='error'>{errors.email}</div> : null}
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
                    {touched.password && errors.password ? <div className='error'>{errors.password}</div> : null}
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
                    {touched.password && touched.passwordConfirmation && errors.passwordConfirmation ? (
                      <div className='error'>{errors.passwordConfirmation}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant='outlined' fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        variant='outlined'
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
                    {touched.acceptTerms && errors.acceptTerms ? (
                      <div className='error'>{errors.acceptTerms}</div>
                    ) : null}
                  </Grid>
                </Grid>
                <Button
                  className={classes.button}
                  type='submit'
                  disabled={isSubmitting || Object.entries(errors).length !== 0}
                  fullWidth
                  variant='contained'
                  color='primary'
                  startIcon={<SendIcon />}>
                  Register
                </Button>
              </form>
            </div>
          </Container>
        )}
      </Formik>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default Subscription;
