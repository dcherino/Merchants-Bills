import merchantsReducers from '../reducer';
import { AppState } from '../../rootReducer';

const initialState: AppState = {
  merchantsData: {
    status: 'loading',
    error: null,
    merchants: [],
  },
};

describe('Merchants reducer tests', () => {
  it('should handle FETCH_MERCHANTS_REQUEST', () => {
    expect(
      merchantsReducers(initialState.merchantsData, {
        type: 'FETCH_MERCHANTS_REQUEST',
      })
    ).toEqual({
      status: 'loading',
      merchants: [],
      error: null,
    });
  });

  it('should handle FETCH_MERCHANTS_SUCCESS', () => {
    expect(
      merchantsReducers(initialState.merchantsData, {
        type: 'FETCH_MERCHANTS_SUCCESS',
        payload: [
          {
            categoryId: 2,
            iconUrl:
              'https://pbs.twimg.com/profile_images/1280004967726751744/1YFw1Bdu_bigger.jpg',
            id: '5a5caa8efe33900100fd8ed6',
            isBill: true,
            name: 'Sky TV',
            transactions: [
              {
                amount: 82.17,
                date: '2018-01-01',
                id: 41,
              },
              {
                amount: 82.17,
                date: '2018-02-01',
                id: 42,
              },
              {
                amount: 82.17,
                date: '2018-03-01',
                id: 43,
              },
              {
                amount: 82.17,
                date: '2018-04-01',
                id: 44,
              },
              {
                amount: 82.17,
                date: '2018-05-01',
                id: 45,
              },
            ],
          },
          {
            categoryId: 3,
            iconUrl:
              'https://pbs.twimg.com/profile_images/1280422740638470147/aBXwvFOs_bigger.jpg',
            id: '5a5caad4fe33900100fd8ed7',
            isBill: false,
            name: 'HSBC Mortgage',
            transactions: [
              {
                amount: 1023,
                date: '2018-01-01',
                id: 1,
              },
              {
                amount: 1023,
                date: '2018-02-01',
                id: 2,
              },
              {
                amount: 1023,
                date: '2018-03-01',
                id: 3,
              },
              {
                amount: 1023,
                date: '2018-04-01',
                id: 4,
              },
              {
                amount: 1023,
                date: '2018-05-01',
                id: 5,
              },
            ],
          },
        ],
      })
    ).toEqual({
      status: 'success',
      merchants: [
        {
          categoryId: 2,
          iconUrl:
            'https://pbs.twimg.com/profile_images/1280004967726751744/1YFw1Bdu_bigger.jpg',
          id: '5a5caa8efe33900100fd8ed6',
          isBill: true,
          name: 'Sky TV',
          transactions: [
            {
              amount: 82.17,
              date: '2018-01-01',
              id: 41,
            },
            {
              amount: 82.17,
              date: '2018-02-01',
              id: 42,
            },
            {
              amount: 82.17,
              date: '2018-03-01',
              id: 43,
            },
            {
              amount: 82.17,
              date: '2018-04-01',
              id: 44,
            },
            {
              amount: 82.17,
              date: '2018-05-01',
              id: 45,
            },
          ],
        },
        {
          categoryId: 3,
          iconUrl:
            'https://pbs.twimg.com/profile_images/1280422740638470147/aBXwvFOs_bigger.jpg',
          id: '5a5caad4fe33900100fd8ed7',
          isBill: false,
          name: 'HSBC Mortgage',
          transactions: [
            {
              amount: 1023,
              date: '2018-01-01',
              id: 1,
            },
            {
              amount: 1023,
              date: '2018-02-01',
              id: 2,
            },
            {
              amount: 1023,
              date: '2018-03-01',
              id: 3,
            },
            {
              amount: 1023,
              date: '2018-04-01',
              id: 4,
            },
            {
              amount: 1023,
              date: '2018-05-01',
              id: 5,
            },
          ],
        },
      ],
      error: null,
    });
  });

  it('should handle FETCH_MERCHANTS_FAILURE', () => {
    expect(
      merchantsReducers(initialState.merchantsData, {
        type: 'FETCH_MERCHANTS_FAILURE',
        error: 'Something went wrong',
      })
    ).toEqual({
      status: 'failure',
      merchants: [],
      error: 'Something went wrong',
    });
  });
});
