import {
  FETCH_MERCHANTS_REQUEST,
  FETCH_MERCHANTS_SUCCESS,
  FETCH_MERCHANTS_FAILURE,
  UPDATE_MERCHANT_REQUEST,
  UPDATE_MERCHANT_SUCCESS,
  UPDATE_MERCHANT_FAILURE,
} from './actionTypes';
import { MerchantsActions, MerchantsState } from './types';

const initialState: MerchantsState = {
  status: 'loading',
  merchants: [],
  error: null,
};

const merchantsReducers = (
  state = initialState,
  action: MerchantsActions
): MerchantsState => {
  switch (action.type) {
    case FETCH_MERCHANTS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_MERCHANTS_SUCCESS:
      return {
        ...state,
        status: 'success',
        merchants: action.payload,
        error: null,
      };
    case FETCH_MERCHANTS_FAILURE:
      return {
        ...state,
        status: 'failure',
        merchants: [],
        error: action.error,
      };
    case UPDATE_MERCHANT_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case UPDATE_MERCHANT_SUCCESS:
      return {
        ...state,
        status: 'success',
        error: null,
      };
    case UPDATE_MERCHANT_FAILURE:
      return {
        ...state,
        status: 'failure',
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default merchantsReducers;
