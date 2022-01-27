export const starWars = [
  {
    side:'Dark Side',
    totalMembers: 3,
    img: './vader.webp',
    troopLeader: {
      name: 'Targin Leeks',
      age: 25,
      img: './fighters.webp'
    },
    members: [
      {
        name:'Darth Vador',
        color: 'red',
      },
      {
        name: 'Biggalo Grey',
        color: 'red'
      },
    ]

  },
  {
    side: 'Light Side',
    totalMembers: 3,
    img: './yoda.jpeg',
    troopLeader: {
      name: 'Luke Skywalker',
      age: 20,
      img: './luke.jpeg'
    },
    members: [
      {
        name: 'Han Solo',
        color: 'lime green',
      },
      {
        name: 'Yoda',
        color: 'light blue'
      },
    ]
  }
];
