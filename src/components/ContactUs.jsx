import React, { useState, useCallback } from 'react';
import ContactSvgImg from '../assets/images/contact.svg';
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const _handleContactFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    // Todo
    console.log({ name, email, message });
  });

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
              // onSubmit={this._handleContactFormSubmit}
            >
              <input
                className='px-4 py-2 focus:ring-2 shadow-md outline-none rounded-sm'
                type='text'
                id='name'
                name='name'
                onChange={({ target: { value } }) => setName(value)}
                value={name}
                placeholder='Your name'
              />
              <input
                className='px-4 py-2 focus:ring-2 shadow-md outline-none rounded-sm'
                type='email'
                id='email'
                name='email'
                onChange={({ target: { value } }) => setEmail(value)}
                value={email}
                placeholder='Your email'
              />
              <textarea
                className='px-4 py-2 focus:ring-2 shadow-md outline-none rounded-sm'
                id='message'
                name='message'
                type='text'
                onChange={({ target: { value } }) => setMessage(value)}
                value={message}
                rows={5}
                placeholder='Your message'
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

export default ContactUs;
