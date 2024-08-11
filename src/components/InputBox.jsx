import React, { useState, useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd', // by default usd
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();
  

  return (
    <div className={`bg-gray-700 p-4 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-gray-300 mb-2 inline-block'>
          {label}
        </label>
        <input
          id={amountInputId}
          className='outline-none w-full bg-gray-800 text-white py-1.5 px-2 rounded-lg border border-gray-600 focus:border-blue-500'
          type='number'
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
      </div>

      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-gray-300 mb-2 w-full'>Currency Type</p>
        
        <select
          className='rounded-lg px-2 py-1 bg-gray-800 text-white cursor-pointer border border-gray-600 focus:border-blue-500'
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
          {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
