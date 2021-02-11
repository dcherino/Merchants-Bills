import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchMerchantsSuccess,
  fetchMerchantsFailure,
  updateMerchantSuccess,
  updateMerchantFailure,
} from './actions';
import {
  FETCH_MERCHANTS_REQUEST,
  UPDATE_MERCHANT_REQUEST,
} from './actionTypes';
import { Merchant, UpdateMerchantRequest } from './types';

// Fetching Merchants
const fetchMerchants = () =>
  axios.get<Merchant[]>('http://localhost:3002/merchants');

export function* fetchMerchantsSaga() {
  try {
    const response = yield call(fetchMerchants);
    yield put(fetchMerchantsSuccess(response.data));
  } catch (error) {
    yield put(fetchMerchantsFailure(error));
  }
}

export function* merchantsSaga() {
  yield all([takeLatest(FETCH_MERCHANTS_REQUEST, fetchMerchantsSaga)]);
}

//Update Merchant
const updateMerchant = (payload: Merchant) =>
  axios.patch<Merchant>(
    `http://localhost:3002/merchants/${payload.id}`,
    payload
  );

function* updateSingleMerchantSaga(action: UpdateMerchantRequest) {
  try {
    yield call(updateMerchant, action.payload);
    yield put(updateMerchantSuccess());
    yield call(fetchMerchantsSaga);
  } catch (error) {
    yield put(updateMerchantFailure(error));
  }
}

export function* updateMerchantSaga() {
  yield all([takeLatest(UPDATE_MERCHANT_REQUEST, updateSingleMerchantSaga)]);
}
