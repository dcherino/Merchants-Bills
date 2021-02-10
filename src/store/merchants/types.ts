import {
  FETCH_MERCHANTS_REQUEST,
  FETCH_MERCHANTS_SUCCESS,
  FETCH_MERCHANTS_FAILURE,
  UPDATE_MERCHANT_REQUEST,
  UPDATE_MERCHANT_SUCCESS,
  UPDATE_MERCHANT_FAILURE,
} from './actionTypes';

interface Transaction {
  amount: number;
  date: string;
  id: number;
}

export interface Merchant {
  categoryId: number;
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: Array<Transaction>;
}

export interface MerchantsState {
  status: 'loading' | 'success' | 'failure';
  merchants: Array<Merchant>;
  error: string | null;
}

export type FetchMerchantsRequest = {
  type: typeof FETCH_MERCHANTS_REQUEST;
};

export type FetchMerchantsSuccess = {
  type: typeof FETCH_MERCHANTS_SUCCESS;
  payload: Array<Merchant>;
};

export type FetchMerchantFailure = {
  type: typeof FETCH_MERCHANTS_FAILURE;
  error: string;
};

export type UpdateMerchantRequest = {
  type: typeof UPDATE_MERCHANT_REQUEST;
  payload: Merchant;
};

export type UpdateMerchantSuccess = {
  type: typeof UPDATE_MERCHANT_SUCCESS;
};

export type UpdateMerchantFailure = {
  type: typeof UPDATE_MERCHANT_FAILURE;
  error: string;
};

export type MerchantsActions =
  | FetchMerchantsRequest
  | FetchMerchantsSuccess
  | FetchMerchantFailure
  | UpdateMerchantRequest
  | UpdateMerchantSuccess
  | UpdateMerchantFailure;
