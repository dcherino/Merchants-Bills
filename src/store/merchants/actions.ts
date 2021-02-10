import {
  FETCH_MERCHANTS_REQUEST,
  FETCH_MERCHANTS_SUCCESS,
  FETCH_MERCHANTS_FAILURE,
  UPDATE_MERCHANT_REQUEST,
  UPDATE_MERCHANT_SUCCESS,
  UPDATE_MERCHANT_FAILURE,
} from './actionTypes';

import {
  FetchMerchantsRequest,
  FetchMerchantsSuccess,
  FetchMerchantFailure,
  UpdateMerchantRequest,
  UpdateMerchantSuccess,
  UpdateMerchantFailure,
  Merchant,
} from './types';

export const fetchMerchantsRequest = (): FetchMerchantsRequest => ({
  type: FETCH_MERCHANTS_REQUEST,
});

export const fetchMerchantsSuccess = (
  payload: Array<Merchant>
): FetchMerchantsSuccess => ({
  type: FETCH_MERCHANTS_SUCCESS,
  payload,
});

export const fetchMerchantsFailure = (error: Error): FetchMerchantFailure => ({
  type: FETCH_MERCHANTS_FAILURE,
  error: error.message,
});

export const updateMerchantRequest = (
  payload: Merchant
): UpdateMerchantRequest => ({
  type: UPDATE_MERCHANT_REQUEST,
  payload,
});

export const updateMerchantSuccess = (): UpdateMerchantSuccess => ({
  type: UPDATE_MERCHANT_SUCCESS,
});

export const updateMerchantFailure = (error: Error): UpdateMerchantFailure => ({
  type: UPDATE_MERCHANT_FAILURE,
  error: error.message,
});
