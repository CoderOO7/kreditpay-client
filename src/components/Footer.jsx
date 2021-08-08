import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createContactus } from '../actions';
import EmailSvg from '../assets/images/email.svg';
import PhoneSvg from '../assets/images/phone.svg';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const _reset = useCallback(() => {
    setName('');
    setEmail('');
    setMessage('');
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
    <footer id='footer'>
      <div className='px-8  bg-black text-white'>
        <div className=' py-4 flex flex-col sm:flex-row justify-between space-y-4'>
          <div className='footer__contact-us space-y-4 hidden sm:block'>
            <p className='text-2xl text-white'>Contact Us</p>
            <form
              action=''
              className='flex flex-col space-y-4 text-black outline-none'
              onSubmit={_handleContactFormSubmit.bind(null, { name, email, message })}
            >
              <input
                className='px-4 py-1 focus:ring-2 shadow-md outline-none rounded-sm'
                type='text'
                id='name'
                name='name'
                onChange={({ target: { value } }) => setName(value)}
                value={name}
                placeholder='Your name'
                required
              />
              <input
                className='px-4 py-2 focus:ring-2 shadow-md outline-none rounded-sm'
                type='email'
                id='email'
                name='email'
                onChange={({ target: { value } }) => setEmail(value)}
                value={email}
                placeholder='Your email'
                required
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
                required
              />
              <button
                type='submit'
                className='bg-blue-700 text-white w-24 h-10 rounded-md hover:bg-blue-600'
              >
                Submit
              </button>
            </form>
          </div>
          <div className='footer__site-map space-y-4'>
            <p className='text-2xl text-white'>Site Map</p>
            <div className='flex flex-col space-y-4 text-gray-400'>
              <a className='hover:text-gray-200' href='/signIn'>
                Login
              </a>
              <a className='hover:text-gray-200' href='/signUp'>
                SignUp
              </a>
              <a className='hover:text-gray-200' href='#features'>
                Features
              </a>
              <a className='hover:text-gray-200' href='#about-us'>
                About Us
              </a>
              <a className='hover:text-gray-200' href='/contactUs'>
                Contact Us
              </a>
            </div>
          </div>
          <div className='footer__company-info'>
            <p className='text-2xl text-white'>Kreditpay</p>
            <ul className='space-y-4 pt-4 text-gray-400'>
              <li className='flex items-center space-x-4'>
                <EmailSvg />
                <span>email@abc.com</span>
              </li>
              <li className='flex items-center space-x-4'>
                <PhoneSvg />
                <span>+91-9211921192</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__copyright text-center py-2 text-xs'>
          © Kreditpay 2021 | Made by CoderOO7
        </div>
      </div>
    </footer>
  );
};

export default Footer;
