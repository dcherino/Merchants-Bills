import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchMerchantsRequest } from '../../store/merchants/actions';
import {
  getErrorSelector,
  getMerchantsSelector,
  getStatusSelector,
} from '../../store/merchants/selectors';
import Tab from './Tab';
import { TabsWrapper, InnerWrapper } from './TabsContent.styles';

interface TabsContentProps {
  elementActive: string;
}

const TabsContent = ({ elementActive }: TabsContentProps) => {
  const dispatch = useDispatch();
  const merchants = useSelector(getMerchantsSelector, shallowEqual);
  const status = useSelector(getStatusSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchMerchantsRequest());
  }, [dispatch]);

  return (
    <div>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <TabsWrapper>
          <InnerWrapper active={elementActive === 'potentials'}>
            <Tab
              isActive={elementActive === 'bills'}
              merchants={merchants.bill}
              type="bill"
            />
            <Tab
              isActive={elementActive === 'potentials'}
              merchants={merchants.potentials}
              type="potentials"
            />
          </InnerWrapper>
        </TabsWrapper>
      )}
    </div>
  );
};

export default TabsContent;
