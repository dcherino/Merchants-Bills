import { Merchant } from '../../store/merchants/types';
import { TabWrapper } from './Tab.styles';
import MerchantItem from './MerchantItem';

interface TabProps {
  isActive: boolean;
  merchants: Array<Merchant>;
  type: string;
}

const Tab = ({ isActive, merchants, type }: TabProps) => {
  // Ordering list by name
  function order(a: any, b: any): number {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }

  return (
    <TabWrapper className={isActive ? 'active' : ''}>
      {merchants.length === 0 && <p>No entries</p>}
      {merchants.sort(order).map((merchant, index) => (
        <MerchantItem key={merchant.id} merchant={merchant} type={type} />
      ))}
    </TabWrapper>
  );
};

export default Tab;
