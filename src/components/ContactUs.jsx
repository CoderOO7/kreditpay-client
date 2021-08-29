import React, { useState, useCallback, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import { useInput } from '../hooks';
import { createContactus } from '../actions';

import ContactSvgImg from '../assets/images/contact.svg';

const ContactUs = () => {
  const [name, bindName, resetName] = useInput('');
  const [email, bindEmail, resetEmail] = useInput('');
  const [message, bindMessage, resetMessage] = useInput('');
  const dispatch = useDispatch();

  const _reset = useCallback(() => {
    resetName();
    resetEmail();
    resetMessage();
  });

  const _handleContactFormSubmit = useCallback(
    ({ name, email, message }, evt) => {
      if (evt) evt.preventDefault();
      const payloads = { name, email, message };
      dispatch(createContactus(payloads));
      _reset();
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <div className='contact-us px-4 sm:px-8 py-4 space-x-4 flex items-center space-between min-h-screen'>
        {/* <FloatingCogsBgPattern className='absolute min-w-screen min-h-screen z-0 fill-gray-400' /> */}
        <div className='w-full px-4 py-8 sm:px-8 sm:py-16 bg-floating-cogs-pattern rounded-md shadow-lg'>
          <header className='space-y-2'>
            <h3 className='text-3xl font-bold'>Get in touch</h3>
            <p className='text-gray-400'>
              Have an inquiry or some feedback for us ? Fill out the form below to contact
              our team
            </p>
          </header>
          <div className='contact-us__left mt-4'>
            <form
              action=''
              className='flex flex-col space-y-4 text-black outline-none'
              onSubmit={_handleContactFormSubmit.bind(null, { name, email, message })}
            >
              <input
                className='px-4 py-2 focus:ring-2 shadow-md outline-none rounded-sm'
                type='text'
                id='name'
                name='name'
                {...bindName}
                placeholder='Your name'
                required
              />
              <input
                className='px-4 py-2 focus:ring-2 shadow-md outline-none rounded-sm'
                type='email'
                id='email'
                name='email'
                {...bindEmail}
                placeholder='Your email'
                required
              />
              <textarea
                className='px-4 py-2 focus:ring-2 shadow-md outline-none rounded-sm'
                id='message'
                name='message'
                type='text'
                {...bindMessage}
                rows={5}
                placeholder='Your message'
                required
              />
              <button
                type='submit'
                className='text-white w-24 h-10 bg-purple-600 hover:bg-purple-700 rounded-md'
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className='w-full'>
          <ContactSvgImg className='w-full max-h-96' />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default connect(null)(ContactUs);
