import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStatusSelector,
  getErrorSelector,
} from './store/merchants/selectors';
import { fetchMerchantsRequest } from './store/merchants/actions';
import styled from 'styled-components';
import Tabs from './components/Tabs';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 400px 1fr 80px;
  gap: 0px 0px;
  grid-template-areas:
    'Header'
    'Hero'
    'Content'
    'Footer';
`;

const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatusSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchMerchantsRequest());
  }, [dispatch]);

  return (
    <Wrapper>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <Tabs />
      )}
    </Wrapper>
  );
};

export default App;
