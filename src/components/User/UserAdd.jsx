import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserRoleOptions } from '../../utils/user';
import { validateUserAddFormFields } from '../../validation/userAdd';
import ApiErrorsRender from '../shared/ApiErrorsRender';
import FormFieldValidationErr from '../shared/FormFieldValidationErr';
import LoadingModal from '../shared/modals/LoadingModal';
import { SUBMIT_BTN_TYPE } from '../../common/constants';
import { createUser } from '../../actions';

class UserAdd extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      first_name: '',
      last_name: '',
      email: '',
      role: '',
      validationErrors: {},
      submitBtnClickType: ''
    };

    this.state = { ...this.initialState };
    this.roleOptions = getUserRoleOptions();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _resetState = () => this.setState({ ...this.initialState });

  _handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  _setSubmitBtnType = (e) => {
    const { submit } = e.target.dataset;
    if (submit === SUBMIT_BTN_TYPE.SAVE) {
      this.setState({ submitBtnClickType: SUBMIT_BTN_TYPE.SAVE });
    } else {
      this.setState({ submitBtnClickType: SUBMIT_BTN_TYPE.SAVE_AND_ADD });
    }
  };

  _handleSubmit = async (e) => {
    e.preventDefault();

    const { first_name, last_name, email, role, submitBtnClickType } = this.state;
    const { history, dispatch } = this.props;

    const data = {
      first_name,
      last_name,
      email,
      role
    };

    const { errors, isValid } = validateUserAddFormFields(data);

    if (!isValid) {
      this.setState({ validationErrors: errors });
    } else {
      dispatch(createUser({ data }));
      if (submitBtnClickType === SUBMIT_BTN_TYPE.SAVE) {
        history.push('/admin/dashboard');
      }
    }
  };

  render() {
    const { first_name, last_name, email, role, validationErrors } = this.state;
    const { apiErrors, loading } = this.props;

    return (
      <>
        {loading && <LoadingModal type='DualRing' />}
        <div className='user p-8 text-black'>
          <header className='user__header'>
            <div className='flex items-center justify-between bg-purple-700 px-4 py-6 text-white shadow-md rounded-md'>
              <h3 className='font-bold text-xl'>Add New User</h3>
            </div>
          </header>
          <div className='flex bg-white mx-4 p-4'>
            <form
              noValidate
              onSubmit={this._handleSubmit}
              className='flex flex-col mt-8 max-w-md'
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
                    onChange={this._handleChange}
                    value={first_name}
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
                    onChange={this._handleChange}
                    value={last_name}
                    className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                    placeholder='Your last name'
                    required
                  />
                  <FormFieldValidationErr error={validationErrors.last_name} />
                </div>
              </div>
              <div className='flex flex-col space-x-1 mt-2'>
                <label htmlFor='email' className='text-lg'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  onChange={this._handleChange}
                  value={email}
                  className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                  placeholder='your@email.com'
                  required
                />
                <FormFieldValidationErr error={validationErrors.email} />
              </div>
              <div className='flex flex-col space-x-1 mt-2'>
                <label htmlFor='role' className='text-lg'>
                  Role
                </label>
                <select
                  name='role'
                  id='role'
                  onChange={this._handleChange}
                  className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                  value={role}
                >
                  {this.roleOptions.map((role, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <option key={idx} default={idx === 0} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex justify-end space-x-2'>
                <button
                  type='submit'
                  data-submit={SUBMIT_BTN_TYPE.SAVE}
                  onClick={this._setSubmitBtnType}
                  className='py-2 px-3 mt-6 bg-black font-bold text-white focus:ring-2 border-none hover:bg-gray-800 ml-auto '
                >
                  Save
                </button>
                <button
                  type='submit'
                  data-submit={SUBMIT_BTN_TYPE.SAVE_AND_ADD}
                  onClick={this._setSubmitBtnType}
                  className='py-2 px-3 mt-6 bg-black font-bold text-white focus:ring-2 border-none hover:bg-gray-800 ml-auto '
                >
                  Save and Add another
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  apiErrors: state.user.errors,
  loading: state.user.loading
});

export default connect(mapStateToProps, null)(withRouter(UserAdd));
