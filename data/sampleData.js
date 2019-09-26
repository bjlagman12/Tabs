let sampleData = [
  {
    id: 1,
    name: 'brian',
    email: 'brian@gmail.com',
    friends: [2, 3],
    owe: [{ '2': 5 }],
    money: 20,
    trans: [
      {
        payTo: 2,
        description: 'burrito from last night',
        amount: 5,
        date: '2019-09-26'
      },
      {
        payTo: 3,
        description: 'hotdog from last night',
        amount: 10,
        date: '2019-09-26'
      }
    ]
  },
  {
    id: 2,
    name: 'nicole',
    email: 'nicole@gmail.com',
    friends: [1, 3],
    owe: [],
    money: 100
  },
  {
    id: 3,
    name: 'jack',
    email: 'jack@gmail.com',
    friends: [1, 2],
    owe: [{ '1': 3 }],
    money: 68
  },
  {
    id: 4,
    name: 'tom',
    email: 'tom@gmail.com',
    friends: [2, 3],
    owe: [{ '2': 5 }],
    money: 11
  },
  {
    id: 5,
    name: 'ashley',
    email: 'ashley@gmail.com',
    friends: [1, 3],
    owe: [],
    money: 28
  },
  {
    id: 6,
    name: 'joe',
    email: 'joe@gmail.com',
    friends: [1, 2],
    owe: [{ '1': 3 }],
    money: 49
  }
];

export default sampleData;
