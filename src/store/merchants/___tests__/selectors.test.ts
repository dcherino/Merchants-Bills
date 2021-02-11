import { AppState } from '../../rootReducer';
import { getMerchantsSelector } from '../selectors';

describe('getMerchantsSelector test', () => {
  it('should return merchants', () => {
    const state: AppState = {
      merchantsData: {
        status: 'success',
        error: null,
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
      },
    };
    const groupedMerchants = {
      bill: [
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
      ],
      potentials: [
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
    };

    const merchants = getMerchantsSelector(state);

    expect(merchants).toEqual(groupedMerchants);
  });
});
