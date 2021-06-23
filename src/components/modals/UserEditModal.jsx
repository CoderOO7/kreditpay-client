/* eslint-disable camelcase */
import React, { Component } from 'react';

import RootModal from '../shared/modals/RootModal';
import { validateUserEditFormFields } from '../../validation/userEdit';
import FormFieldValidationErr from '../shared/FormFieldValidationErr';
import LoadingModal from '../shared/modals/LoadingModal';
import { getUserRoleOptions } from '../../utils/user';

class UserEditModal extends Component {
  constructor(props) {
    super(props);
    const { userData } = this.props;
    this.state = {
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      role: userData.role,
      validationErrors: {}
    };

    this.roleOptions = getUserRoleOptions();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  }

  _handleClose(e) {
    e.preventDefault();
    const { closeModal } = this.props;
    closeModal();
  }

  async _handleSubmit(e) {
    e.preventDefault();

    const { closeModal, handleUserUpdate, userData } = this.props;

    const { validationErrors, loading, ...rest } = { ...this.state };
    const userPayloads = rest;

    const { errors, isValid } = validateUserEditFormFields({ ...userPayloads });

    if (!isValid) {
      this.setState({ validationErrors: errors });
    } else {
      handleUserUpdate(userData._id, userPayloads);
      closeModal();
    }
  }

  render() {
    const { isOpen, loading } = this.props;
    const { first_name, last_name, email, role, validationErrors } = this.state;

    return isOpen ? (
      <RootModal>
        {loading && <LoadingModal type='DualRing' />}
        <div className='max-w-md mx-auto md:max-w-1/2 p-8 bg-white text-black relative'>
          <header className='space-y-4 text-center'>
            <h1 className='text-2xl font-bold tracking-wide'>User Details</h1>
          </header>
          <button
            type='button'
            className='appearance-none absolute top-4 right-8 hover:text-gray-600'
            onClick={this._handleClose}
          >
            <svg
              height='24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          <form
            action=''
            noValidate
            onSubmit={this._handleSubmit}
            className='flex flex-col mt-8 w-full'
          >
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
            <div className='flex flex-col space-y-1 mt-2'>
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
            <div className='flex flex-col space-y-1 mt-2'>
              <label htmlFor='email' className='text-lg'>
                Role
              </label>
              <select
                name='role'
                id=''
                onChange={this._handleChange}
                className='px-3 py-2 border text-gray-700 focus:ring-2 shadow-md outline-none'
                value={role.toLowerCase()}
              >
                {this.roleOptions.map((role, idx) => (
                  <option key={idx} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type='submit'
              className='py-2 px-3 mt-6 bg-black font-bold text-white focus:ring-2 border-none hover:bg-gray-800 ml-auto '
            >
              Update
            </button>
          </form>
        </div>
      </RootModal>
    ) : null;
  }
}

export default UserEditModal;
