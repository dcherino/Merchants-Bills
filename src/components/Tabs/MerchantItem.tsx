import { useState } from 'react';
import { Merchant } from '../../store/merchants/types';

import {
  MerchantWrapper,
  MainInfo,
  Image,
  BasicInfo,
  Button,
  Transactions,
} from './MerchantItem.styles';
import logoPlaceholder from '../../assets/logo-placeholder.svg';
import { useDispatch } from 'react-redux';
import { updateMerchantRequest } from '../../store/merchants/actions';

interface MerchantItemProps {
  merchant: Merchant;
  type: string;
}

const MerchantItem = ({ merchant, type }: MerchantItemProps) => {
  const dispatch = useDispatch();
  const [showTransaction, setShowTransaction] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleBill = (merchant: Merchant) => {
    const updatedMerchant = {
      ...merchant,
      isBill: !merchant.isBill,
    };
    dispatch(updateMerchantRequest(updatedMerchant));
  };

  const toggleTransactions = () => {
    const shouldShow = !showTransaction;
    setShowTransaction(shouldShow);
  };

  const toggleButtonVisibility = () => {
    const shouldShow = !showButton;
    setShowButton(shouldShow);
  };

  // Fallback for images
  function addDefaultSrc(event: React.SyntheticEvent<HTMLImageElement>) {
    const target: HTMLImageElement = event.target as HTMLImageElement;
    return (target.src = logoPlaceholder);
  }

  return (
    <MerchantWrapper
      title="Click to show transactions"
      onClick={toggleTransactions}
      onMouseEnter={toggleButtonVisibility}
      onMouseLeave={toggleButtonVisibility}
    >
      <MainInfo>
        <Image>
          <img
            onError={(e) => addDefaultSrc(e)}
            src={merchant.iconUrl}
            alt={`${merchant.name} Icon`}
          />
        </Image>
        <BasicInfo>
          <h3>{merchant.name} </h3>
          <div>
            <span>Total Transactions:</span>
            <strong>${' '}
            {merchant.transactions.reduce(
              (acc: number, current) => acc + current.amount,
              0
            )}
            </strong>
            <em>({merchant.transactions.length})</em>
          </div>
        </BasicInfo>

        <Button
          onClick={() => toggleBill(merchant)}
          display={showButton ? 'show' : ''}
        >
          {type === 'bill' ? 'Remove Bill' : 'Add as Bill'}
        </Button>
      </MainInfo>

      <Transactions display={showTransaction ? 'show' : ''}>
        <h4>Transactions</h4>
        <ul>
          {merchant.transactions.map((transaction) => (
            <li key={merchant.id + transaction.id}>
              <div>
                <strong>Date:</strong> {transaction.date}
              </div>
              <div>
                <strong>Amount:</strong> $ {transaction.amount}{' '}
              </div>

            </li>
          ))}
        </ul>
      </Transactions>
    </MerchantWrapper>
  );
};

export default MerchantItem;
