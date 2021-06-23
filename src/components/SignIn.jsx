import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import FormFieldValidationErr from './shared/FormFieldValidationErr';
import { loginUser } from '../actions';
import { validateSignInFormFields } from '../validation/signIn';
import LoadingModal from './shared/modals/LoadingModal';
import ApiErrorsRender from './shared/ApiErrorsRender';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validationErrors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const { email, password } = this.state;

    const payloads = {
      email,
      password
    };

    const { errors, isValid } = validateSignInFormFields({ ...payloads });
    if (!isValid) {
      this.setState({ validationErrors: errors });
    } else {
      dispatch(loginUser(payloads));
      this.setState({ validationErrors: {} });
    }
  }

  render() {
    const { password, email, validationErrors } = this.state;
    const { apiErrors, loading } = this.props;

    const content = (
      <section className='sign-in'>
        {loading && <LoadingModal type='Infinity' />}
        <div className='p-8 min-h-screen'>
          <div className='max-w-md mx-auto md:max-w-1/2'>
            <header className='space-y-4 text-center'>
              <h1 className='text-4xl font-bold tracking-wide'>Welcome</h1>
            </header>
            <form
              action=''
              onSubmit={this.handleSubmit}
              className='flex flex-col mt-16 w-full'
              noValidate
            >
              <ApiErrorsRender errors={apiErrors} />
              <div className='flex flex-col space-y-1 mt-2'>
                <label htmlFor='email' className='text-lg'>
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                  onChange={this.handleInputChange}
                  value={email}
                  placeholder='your@email.com'
                  autoComplete='username'
                  required
                />
                <FormFieldValidationErr error={validationErrors.email} />
              </div>
              <div className='flex flex-col space-y-1 mt-2'>
                <label htmlFor='password' className='text-lg'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                  onChange={this.handleInputChange}
                  value={password}
                  placeholder='Your Password'
                  autoComplete='current-password'
                  required
                />
                <FormFieldValidationErr error={validationErrors.password} />
              </div>
              <button
                type='submit'
                className='py-2 mt-4 bg-black font-bold text-white hover:bg-gray-800'
              >
                Sign In
              </button>
            </form>
            <footer className='text-sm space-y-2 mt-6 text-center'>
              <p>
                Don't have an account?
                <Link
                  to='/signup'
                  className='underline font-semibold hover:text-blue-800'
                >
                  Register here
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </section>
    );

    return content;
  }
}

SignIn.propTypes = {
  apiErrors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  apiErrors: state.auth.errors
});

export default connect(mapStateToProps)(withRouter(SignIn));
