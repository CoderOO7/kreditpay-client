import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { purgeErrors, signupUser } from '../actions';
import LoadingModal from './shared/modals/LoadingModal';
import { validateSignUpFormFields } from '../validation/signUp';
import FormFieldValidationErr from './shared/FormFieldValidationErr';
import ApiErrorsRender from './shared/ApiErrorsRender';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRole: '',
      validationErrors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRoleBtnClick = this.handleRoleBtnClick.bind(this);
  }

  handleRoleBtnClick(e) {
    const { className } = e.target;
    if (className.includes('customer')) {
      this.setState({
        userRole: 'customer'
      });
    } else if (className.includes('agent')) {
      this.setState({
        userRole: 'agent'
      });
    }
    return '';
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { userRole } = this.state;
    const payloads = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      email: this.email.value,
      password: this.password.value,
      password2: this.password2.value,
      role: userRole
    };

    const { errors, isValid } = validateSignUpFormFields({ ...payloads });
    if (!isValid) {
      this.setState({ validationErrors: errors });
    } else {
      dispatch(signupUser(payloads));
    }
  }

  setTextInputRef(element) {
    this.textInputRef = element;
  }

  render() {
    const { userRole, validationErrors } = this.state;
    const { loading, apiErrors } = this.props;

    const roleTemplate = (
      <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl'>How would you like to join us ?</h1>
        <div className='p-8 flex justify-around items-center gap-4 text-white'>
          <button
            className='customer py-3 px-4 bg-black hover:bg-gray-800'
            onClick={this.handleRoleBtnClick}
            type='button'
          >
            As Customer
          </button>
          <button
            className='agent py-3 px-4 bg-black hover:bg-gray-800'
            onClick={this.handleRoleBtnClick}
            type='button'
          >
            As Agent
          </button>
        </div>
      </div>
    );

    const signUpFormTemplate = (
      <div className='p-8 min-h-screen'>
        <div className='max-w-md mx-auto md:max-w-1/2'>
          <header className='space-y-4 text-center'>
            <h1 className='text-4xl font-bold tracking-wide'>Join Us</h1>
          </header>
          <form
            action=''
            noValidate
            onSubmit={this.handleSubmit}
            className='flex flex-col mt-16 w-full'
          >
            <ApiErrorsRender errors={apiErrors} />
            <div className='flex flex-wrap justify-between gap-2'>
              <div className='flex flex-col flex-1 space-y-1 mt-2'>
                <label htmlFor='first-name' className='text-lg'>
                  First Name
                </label>
                <input
                  type='text'
                  id='first-name'
                  name='first_name'
                  ref={(input) => {
                    this.first_name = input;
                  }}
                  className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                  placeholder='Your first name'
                  required
                />
                <FormFieldValidationErr error={validationErrors.first_name} />
              </div>
              <div className='flex flex-col flex-1 space-y-1 mt-2'>
                <label htmlFor='last-name' className='text-lg'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='last-name'
                  name='last_name'
                  ref={(input) => {
                    this.last_name = input;
                  }}
                  className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                  placeholder='Your last name'
                  required
                />
                <FormFieldValidationErr error={validationErrors.last_name} />
              </div>
            </div>
            <div className='flex flex-col space-y-1 mt-2'>
              <label htmlFor='email' className='text-lg'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                ref={(input) => {
                  this.email = input;
                }}
                className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                placeholder='your@email.com'
                required
              />
              <FormFieldValidationErr error={validationErrors.email} />
            </div>
            <div className='flex flex-wrap justify-between gap-2'>
              <div className='flex flex-col flex-1 space-y-1 mt-2'>
                <label htmlFor='password' className='text-lg'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  ref={(input) => {
                    this.password = input;
                  }}
                  className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                  placeholder='Your Password'
                  autoComplete='new-password'
                  required
                />
                <FormFieldValidationErr error={validationErrors.password} />
              </div>
              <div className='flex flex-col flex-1 space-y-1 mt-2'>
                <label htmlFor='password2' className='text-lg'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='password2'
                  name='password2'
                  ref={(input) => {
                    this.password2 = input;
                  }}
                  className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                  placeholder='Your Password Confirmation'
                  autoComplete='new-password'
                  required
                />
                <FormFieldValidationErr error={validationErrors.password2} />
              </div>
            </div>
            <button
              type='submit'
              className='py-2 mt-4 bg-black font-bold text-white focus:ring-2 border-none hover:bg-gray-800'
            >
              Sign Up
            </button>
          </form>
          <footer className='text-sm space-y-2 mt-6 text-center'>
            <p>
              Already have an account?
              <Link to='/' className='underline font-semibold hover:text-blue-800'>
                Sign In
              </Link>
            </p>
          </footer>
        </div>
      </div>
    );

    const content = (
      <section className='sign-up'>
        {loading && <LoadingModal />}
        {userRole.length === 0 ? roleTemplate : signUpFormTemplate}
      </section>
    );

    return content;
  }
}

SignUp.propTypes = {
  apiErrors: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  apiErrors: state.auth.errors
});

export default connect(mapStateToProps)(withRouter(SignUp));
