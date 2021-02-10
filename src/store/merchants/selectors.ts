import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getStatus = (state: AppState) => state.merchantsData.status;
const getMerchants = (state: AppState) => state.merchantsData.merchants;
const getError = (state: AppState) => state.merchantsData.error;

export const getStatusSelector = createSelector(getStatus, (status) => status);
export const getMerchantsSelector = createSelector(
  getMerchants,
  (merchants) => merchants
);
export const getErrorSelector = createSelector(getError, (error) => error);
