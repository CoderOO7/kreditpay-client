import React, { Component } from 'react';
import Header from './Header';
import PaymentCardImg from '../assets/images/lp-about-payment.svg';
import AlertAndAdviceImg from '../assets/images/lp-alert-and-advices.svg';
import OnlineTransactionImg from '../assets/images/lp-online-transaction.svg';
import RealtimeSpendingImg from '../assets/images/lp-realtime-spending.svg';
import EmailSvg from '../assets/images/email.svg';
import PhoneSvg from '../assets/images/phone.svg';

class AppLandingPage extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  _handleContactFormInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  _handleContactFormSubmit = () => {
    const { name, email, message } = this.state;
    // Todo

    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <>
        <Header />
        <main className=''>
          <section
            id='about-us'
            className='px-8 py-4 flex justify-items-between items-center space-x-8'
          >
            <div className='w-120 h-120 flex-1'>
              <PaymentCardImg />
            </div>
            <div>
              <header>
                <p className='text-5xl font-bold'>Get Loan</p>
                <p className='text-5xl font-bold text-yellow-600'>With Ease</p>
              </header>
              <p className='about-us__content py-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          </section>
          <section id='features' className='px-8 py-6'>
            <header className='font-bold'>
              <p className='text-4xl'>Secure Payment</p>
              <p className='text-2xl text-yellow-600'>Packed with features</p>
            </header>
            <div className='__content-container px-16'>
              <div className='features__content py-4'>
                <section className='__content-item flex justify-center items-center space-x-8'>
                  <div className='flex-1'>
                    <OnlineTransactionImg />
                  </div>
                  <div className='flex-1 text-center'>
                    <h4 className='text-2xl'>Online Transaction</h4>
                    <p>
                      Integer ornare neque mauris, ac vulputate lacus venenatis et.
                      Pellentesque ut ultrices purus.
                    </p>{' '}
                    <div className='w-120 h-120 flex-1'>Img Container</div>
                  </div>
                </section>
                <section className='__content-item flex justify-between items-center space-x-8'>
                  <div className='order-first sm:order-last'>
                    <RealtimeSpendingImg />
                  </div>
                  <div className='order-last sm:order-first flex-1 text-center'>
                    <h4 className='text-2xl'>Real Time Spending</h4>
                    <p>
                      Integer ornare neque mauris, ac vulputate lacus venenatis et.
                      Pellentesque ut ultrices purus.
                    </p>
                  </div>
                </section>
                <section className='__content-item flex justify-between items-center space-x-8'>
                  <div className='order-last sm:order-first'>
                    <AlertAndAdviceImg />
                  </div>
                  <div className='text-center'>
                    <h4 className='text-2xl'>Alert and advices</h4>
                    <p>
                      Integer ornare neque mauris, ac vulputate lacus venenatis et.
                      Pellentesque ut ultrices purus.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </main>
        <footer id='footer'>
          <div className='px-8  bg-black text-white'>
            <div className='flex justify-between py-4'>
              <div className='footer__contact-us space-y-4'>
                <p className='text-2xl text-white'>Contact Us</p>
                <form
                  action=''
                  className='flex flex-col space-y-4 text-black outline-none'
                  onSubmit={this._handleContactFormSubmit}
                >
                  <input
                    className='px-4 py-1 focus:ring-2 shadow-md outline-none'
                    type='text'
                    id='name'
                    name='name'
                    onChange={this._handleContactFormInputChange}
                    value={name}
                    placeholder='Your name'
                  />
                  <input
                    className='px-4 py-2 focus:ring-2 shadow-md outline-none'
                    type='email'
                    id='email'
                    name='email'
                    onChange={this._handleContactFormInputChange}
                    value={email}
                    placeholder='Your Email'
                  />
                  <textarea
                    className='px-4 py-2 focus:ring-2 shadow-md outline-none'
                    id='message'
                    name='message'
                    type='text'
                    onChange={this._handleContactFormInputChange}
                    value={message}
                    rows={5}
                    placeholder='Your Message'
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
                  <a className='hover:text-gray-200' href='#'>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className='footer__company-info'>
                <p className='text-2xl text-white'>Kreditpay</p>
                <ul className='space-y-4 pt-4'>
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
            <div className='footer__copyright text-center py-2'>
              © Kreditpay 2021 | Made by CoderOO7
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default AppLandingPage;
