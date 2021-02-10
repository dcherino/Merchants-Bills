import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';
import { Merchant } from './types';

const getStatus = (state: AppState) => state.merchantsData.status;
const getMerchants = (state: AppState) => state.merchantsData.merchants;
const getError = (state: AppState) => state.merchantsData.error;

const groupedMerchants = (state: AppState) => state.merchantsData.merchants.reduce((accumulator, current) => {
  current.isBill === true
    ? accumulator.bill.push(current)
    : accumulator.potentials.push(current);
  return accumulator;
}, {bill: [] as Array<Merchant>, potentials:[] as Array<Merchant>});

export const getStatusSelector = createSelector(getStatus, (status) => status);
export const getMerchantsSelector = createSelector(
  groupedMerchants,
  (merchants) => merchants
);
export const getErrorSelector = createSelector(getError, (error) => error);
