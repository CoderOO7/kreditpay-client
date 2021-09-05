import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import { useInput } from '../hooks';
import { Button } from './shared/Button';

import ContactIcon from '../assets/icons/contact-icon.svg';
import SendIcon from '../assets/icons/send-icon.svg';
import MailIcon from '../assets/icons/mail-icon.svg';
import { bindPromiseWithDispatch } from '../utils/redux';
import { createContactus } from '../actions';

const ContactUs = () => {
  const [name, bindName, resetName] = useInput('');
  const [email, bindEmail, resetEmail] = useInput('');
  const [message, bindMessage, resetMessage] = useInput('');
  const [canShowSubmitSuccessPopup, setCanShowSubmitSuccessPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const _reset = useCallback(() => {
    resetName();
    resetEmail();
    resetMessage();
  });

  const _handleContactFormSubmit = useCallback(
    async ({ name, email, message }, evt) => {
      if (evt) evt.preventDefault();
      const payloads = { name, email, message };
      setIsLoading(true);
      const { success } = await bindPromiseWithDispatch(dispatch)(createContactus)(
        payloads
      );
      if (success) {
        setCanShowSubmitSuccessPopup(true);
        _reset();
      }
      setIsLoading(false);
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <div className='contact-us px-4 sm:px-8 py-4 space-x-4 flex items-center space-between min-h-screen'>
        <div className='relative w-full px-4 py-8 sm:px-8 sm:py-16 rounded-md shadow-lg overflow-hidden'>
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
              <Button
                isLoading={isLoading}
                disabled={isLoading}
                icon={SendIcon}
                className='text-white w-24 h-10 bg-purple-600 hover:bg-purple-700 rounded-md'
                type='submit'
              >
                Send
              </Button>
            </form>
          </div>
          <aside
            className={`contact-us__popup-submit--success absolute top-0 left-0 h-full w-full opacity-0 bg-gradient-to-r from-blue-600 to-purple-500 transform translate-y-0 
            transition-transform ease-in-out duration-700 ${
              !canShowSubmitSuccessPopup ? 'translate-y-full' : 'opacity-100'
            }`}
          >
            <div className='__popup-wrap flex flex-col w-full h-full items-center justify-center space-y-8 text-white'>
              <div className='w-20 h-20'>
                <MailIcon fill='white' />
              </div>
              <p>Thank you for contacting support, we will revert back soon</p>
              <button
                type='button'
                className='w-24 px-2 py-2 bg-purple-500 hover:bg-purple-600 focus:outline-none text-white rounded-lg'
                onClick={() => {
                  setCanShowSubmitSuccessPopup(false);
                }}
              >
                Close
              </button>
            </div>
          </aside>
        </div>
        <div className='w-full'>
          <ContactIcon className='w-full max-h-96' />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
