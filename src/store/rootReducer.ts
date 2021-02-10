import { combineReducers } from 'redux';
import merchantsReducers from './merchants/reducer';

const rootReducer = combineReducers({
  merchantsData: merchantsReducers,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
