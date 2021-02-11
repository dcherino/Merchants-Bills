import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { runSaga } from 'redux-saga';
import { fetchMerchantsSaga } from '../sagas';

const axiosMock = new MockAdapter(axios);

describe('fetchMerchantsSaga', () => {
  afterEach(() => {
    axiosMock.reset();
  });

  it('should fire FETCH_MERCHANTS_SUCCESS in case of success', async () => {
    const data = [
      {
        categoryId: 1,
        iconUrl:
          'https://pbs.twimg.com/profile_images/1151788824093188097/wHfb5mYZ_bigger.png',
        id: '5a5caa1efe33900100fd8ed5',
        isBill: false,
        name: 'Vodafone',
        transactions: [
          {
            amount: 12.34,
            date: '2018-01-13',
            id: 36,
          },
          {
            amount: 14.34,
            date: '2018-02-13',
            id: 37,
          },
          {
            amount: 15.54,
            date: '2018-03-13',
            id: 38,
          },
          {
            amount: 11.34,
            date: '2018-04-13',
            id: 39,
          },
          {
            amount: 18.99,
            date: '2018-05-13',
            id: 40,
          },
        ],
      },
    ];

    axiosMock.onGet('http://localhost:3002/merchants').reply(200, data);

    const dispatched: any[] = [];

    const saga = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchMerchantsSaga
    );

    await saga.toPromise();

    expect(dispatched).toEqual([
      {
        type: 'FETCH_MERCHANTS_SUCCESS',
        payload: data,
      },
    ]);
  });

  it('should fire FETCH_MERCHANTS_FAILURE in case of error', async () => {
    axiosMock.onGet('http://localhost:3002/merchants').networkError();

    const dispatched: any[] = [];

    const saga = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchMerchantsSaga
    );

    await saga.toPromise();

    expect(dispatched).toEqual([{
      type: 'FETCH_MERCHANTS_FAILURE',
      error: 'Network Error',
    }]);
  });
});
