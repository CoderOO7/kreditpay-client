// eslint-disable class-methods-use-this
import React, { Component } from 'react';
import { CURRENCY } from '../common/constants';
import { Button } from './shared/Button';
import MoneyTransferImg from '../assets/images/money-transfer.svg';

function CustomerLandingPage() {
  const _borrowCurrencyTypeOptions = Object.freeze([
    {
      value: CURRENCY.USDT,
      label: CURRENCY.USDT
    }
  ]);

  const _investCurrencyTypeOptions = Object.freeze([
    {
      value: CURRENCY.BTC,
      label: CURRENCY.BTC
    },
    {
      value: CURRENCY.ETH,
      label: CURRENCY.ETH
    }
  ]);

  const _termItemList = Object.freeze([
    {
      value: 7,
      label: '7 Days'
    },
    {
      value: 15,
      label: '15 Days'
    },
    {
      value: 30,
      label: '30 Days'
    },
    {
      value: 60,
      label: '60 Days'
    },
    {
      value: 90,
      label: '90 Days'
    }
  ]);

  const formTemplate = (
    <form action='' className='space-y-4'>
      <div className='flex flex-col'>
        <label className='text-sm' htmlFor='borrowAmount'>
          Borrow Amount
        </label>
        <div className='flex y-scale-1 border-2 border-gray-300 focus-within:border-blue-400 rounded-md overflow-hidden shadow-md'>
          <input
            className='px-2 py-1 w-full outline-none border-gray-700'
            id='borrowAmount'
            type='number'
            name=''
          />
          <select
            className='px-2 py-1 border-0 outline-none overflow-hidden bg-transparent w-24'
            name='borrowCurrencyType'
            id='borrowCurrencyType'
          >
            {_borrowCurrencyTypeOptions.map((i) => (
              <option key={i} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
        <span className='text-gray-400 text-sm'>
          200USDT &ge; Borrow Amount &le; 3500000 USDT{' '}
        </span>
      </div>
      <div className='flex flex-col'>
        <label className='text-sm' htmlFor='investAmount'>
          Collateral
        </label>
        <div className='flex y-scale-1 border-2 border-gray-300 focus-within:border-blue-400 rounded-md overflow-hidden shadow-md'>
          <input
            className='px-2 py-1 w-full outline-none border-gray-700'
            type='number'
            name='investAmount'
            id='investAmount'
          />
          <select
            className='px-2 py-1 border-0 outline-none overflow-hidden bg-transparent w-24'
            name='investCurrencyType'
            id='investCurrencyType'
          >
            {_investCurrencyTypeOptions.map((i) => (
              <option key={i} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
        <span className='text-gray-400 text-sm'>Available 0 BTC</span>
      </div>
      <div className='flex flex-col'>
        <label className='text-sm' htmlFor='investAmount'>
          Collateral
        </label>
        <input
          className='px-2 py-1 w-full outline-none border-gray-700'
          type='range'
          name='investAmount'
          id='investAmount'
        />
        <div className='flex justify-between'>
          <span className='text-gray-400 text-sm'>0.010%</span>
          <span className='text-gray-400 text-sm'>0.042%</span>
        </div>
      </div>

      <div className='flex flex-col'>
        <p className='text-sm'>Term</p>
        <div className='flex justify-between'>
          {_termItemList.map((o, idx) => (
            <div key={idx}>
              <input
                className='cursor-pointer mr-2'
                data-value={o.value}
                type='radio'
                id={`daysToRepay-${o.value}`}
                name='daysToRepay'
                value={o.value}
              />
              <label className='cursor-pointer' htmlFor={`daysToRepay-${o.value}`}>
                {o.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='flex pt-6'>
        <Button className='px-16 py-2  ml-auto bg-gray-200 hover:bg-gray-300 rounded-md'>
          Submit
        </Button>
      </div>
    </form>
  );

  const loanDetailDisplayTemplate = (
    <div className='loan-detail-display flex justify-end'>
      <div className='loan-detail-display__wrap bg-gray-200 shadow-md rounded-md w-4/5 px-8 py-14'>
        <h4 className='loan-detail-display__title font-bold text-xl'>Risk Management</h4>
        <div className='loan-detail-display__price mt-6'>
          <p className='__price-title text-gray-700 text-sm'>
            Liquidation Price (BTC / USDT)
          </p>
          <p className='__price-text text-red-400'>
            <span className='__price-text--value text-3xl font-bold'>0</span>
            <span className='__price-text--currency'>&nbsp;USDT</span>
          </p>
        </div>
        <div className='loan-detail-display__ltv mt-7'>
          <ul className='__ltv-list flex gap-x-6'>
            <li className='__ltv-list-item flex justify-between text-sm'>
              <span className='__ltv-list-item__labe text-gray-500'>Initial LTV</span>
              <span className='__ltv-list-item__value'>&nbsp;60%</span>
            </li>
            <li className='__ltv-list-item flex justify-between text-sm'>
              <span className='__ltv-list-item__labe text-gray-500'>Margin call</span>
              <span className='__ltv-list-item__value'>&nbsp;80%</span>
            </li>
            <li className='__ltv-list-item flex justify-between text-sm'>
              <span className='__ltv-list-item__labe text-gray-500'>Liquidation</span>
              <span className='__ltv-list-item__value'>&nbsp;90%</span>
            </li>
          </ul>
        </div>
        <hr className='bg-gray-300 h-1 mt-8' />
        <div className='loan-detail-display__information mt-6'>
          <h4 className='__information__title font-bold py-2 text-lg'>information</h4>
          <div className='__information__description'>
            <ul className='__description__list'>
              <li className='__description__list-item py-2 flex justify-between text-sm'>
                <span className='__list-item-text text-gray-400'>Total interest</span>
                <span className='__list-item-value'>0 USDT</span>
              </li>
              <li className='__description__list-item py-2 flex justify-between text-sm'>
                <span className='__list-item-text text-gray-400'>Total repayment</span>
                <span className='__list-item-value'>0 USDT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className='customer-landing-page px-32 py-8'>
        <header className='page-header flex items-center'>
          <div className='page-header__left flex-1'>
            <h2 className='page-header__title text-5xl font-bold tracking-wide text-gray-700'>
              Collateral to borrow money
            </h2>
            <p className='page-header__description py-6 text-gray-500 antialiased'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos placeat
              possimus ipsa, dolor iusto distinctio, beatae error repellat nihil itaque
              esse vel fugit accusantium. Ipsum et quas asperiores minima maxime.
            </p>
          </div>
          <div className='page-header__right flex justify-center flex-1'>
            <MoneyTransferImg className='max-w-1/2 max-h-60 h-auto' />
          </div>
        </header>
        <div className='loan-panel flex gap-x-6 py-8'>
          <div className='loan-panel__left w-1/2'>{formTemplate}</div>
          <div className='loan-panel__right w-1/2'>{loanDetailDisplayTemplate}</div>
        </div>
      </section>
    </>
  );
}

export default CustomerLandingPage;
