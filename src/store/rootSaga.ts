import { all, fork } from 'redux-saga/effects';
import { merchantsSaga, updateMerchantSaga } from './merchants/sagas';

export function* rootSaga() {
  yield all([fork(merchantsSaga), fork(updateMerchantSaga)]);
}
