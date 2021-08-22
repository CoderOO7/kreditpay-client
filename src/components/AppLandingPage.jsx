import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import PaymentCardImg from '../assets/images/lp-about-payment.svg';
import AlertAndAdviceImg from '../assets/images/lp-alert-and-advices.svg';
import OnlineTransactionImg from '../assets/images/lp-online-transaction.svg';
import RealtimeSpendingImg from '../assets/images/lp-realtime-spending.svg';

class AppLandingPage extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <main className=''>
          <section id='about-us' className='px-8 py-4 space-y-4 sm:space-x-12'>
            <div className='w-full sm:w-5/12 h-auto inline-block align-middle'>
              <PaymentCardImg />
            </div>
            <div className='w-full sm:w-6/12 inline-block align-middle'>
              <header className='text-4xl sm:text-5xl font-bold'>
                <p>Get Loan</p>
                <p className=' text-yellow-600'>With Ease</p>
              </header>
              <p className='about-us__content py-2'>
                Kreditpay is a crypto lending platform that allow you to get an instant
                cash loan using your bitcoin. It's a decentralized network where we help
                our customers use their cryptocurrencies to get cash loans up to 80% of
                their BTC's value and starting at 0% interest.
              </p>
            </div>
          </section>
          <section id='features' className='px-8 py-6'>
            <header className='font-bold'>
              <p className='text-3xl sm:text-4xl'>Secure Payment</p>
              <p className='text-2xl text-yellow-600'>Packed with features</p>
            </header>
            <div className='__content-container px-8 sm:px-16'>
              <div className='features__content py-4'>
                <section className='__content-item flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-8'>
                  <div className='flex-1'>
                    <OnlineTransactionImg />
                  </div>
                  <div className='flex-1 text-center'>
                    <h4 className='text-2xl'>Online Transaction</h4>
                    <p>
                      Being decentralized it's a peer to peer network which provide secure
                      transaction and allow to have multiple copies of your transaction
                      history.
                    </p>{' '}
                  </div>
                </section>
                <section className='__content-item flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-8'>
                  <div className='order-first sm:order-last'>
                    <RealtimeSpendingImg />
                  </div>
                  <div className='flex-1 text-center'>
                    <h4 className='text-2xl'>Real Time Spending</h4>
                    <p>
                      As soon as you lend your bitcoins, you will get your cash
                      immediately with your preferred mode of payment gateway.
                    </p>
                  </div>
                </section>
                <section className='__content-item flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-8'>
                  <div>
                    <AlertAndAdviceImg />
                  </div>
                  <div className='flex-1 text-center'>
                    <h4 className='text-2xl'>Alert and advices</h4>
                    <p>
                      As our valuable customer you will regularly receive email alerts
                      about your transactions and advice from our team to maximize your
                      loan benefits.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default withRouter(AppLandingPage);
