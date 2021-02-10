import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateMerchantRequest } from '../store/merchants/actions';
import { getMerchantsSelector } from '../store/merchants/selectors';
import { Merchant } from '../store/merchants/types';

const Tabs = () => {
  const dispatch = useDispatch();
  const merchants = useSelector(getMerchantsSelector, shallowEqual);

  const handleClick = (merchant: Merchant) => {
    const updatedMerchant = {
      ...merchant,
      isBill: !merchant.isBill,
    };
    dispatch(updateMerchantRequest(updatedMerchant));
  };

  function addDefaultSrc(ev: React.SyntheticEvent<HTMLImageElement>) {
    // ev.target.src = 'some default image url'
  }

  function order(a: any, b: any): number {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }


  return (
    <div>
      <div>
        {merchants.bill.map((merchant, index) => (
          <div
          style={{ marginBottom: '10px' }}
          key={merchant.id}
          onClick={() => handleClick(merchant)}
        >
          <img
            onError={(e) => addDefaultSrc(e)}
            src={merchant.iconUrl}
            alt={`${merchant.name} Icon`}
          />
          {++index}. {merchant.name} <br /> Transactions:{' '}
          {merchant.transactions.length} <br /> Bill:{' '}
          {merchant.isBill && 'True'}
        </div>
        ))}
      </div>
      <div>
        {merchants.noBill.map((merchant, index) => (
          <div
          style={{ marginBottom: '10px' }}
          key={merchant.id}
          onClick={() => handleClick(merchant)}
        >
          <img
            onError={(e) => addDefaultSrc(e)}
            src={merchant.iconUrl}
            alt={`${merchant.name} Icon`}
          />
          {++index}. {merchant.name} <br /> Transactions:{' '}
          {merchant.transactions.length} <br /> Bill:{' '}
          {!merchant.isBill && 'False'}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;