const initialProducts = [
  {
    id: 1,
    title: 'Some fancy product',
    description: 'Soo good because soo good',
    price: 70,
    currency: 'USD',
    discount: false,
    recommended: false,
    opinions: [
      { 
        id: 1,
        message: 'I liked it',
        name: 'Fred'
      },
      { 
        id: 2,
        message: 'I liked it so much',
        name: 'John'
      }
    ]
  },
  {
    id: 2,
    title: 'Not so fancy product',
    description: 'Not so good because not so good',
    price: 7,
    currency: 'USD',
    discount: true,
    recommended: true,
    opinions: [
      { 
        id: 1,
        message: 'I did not like it',
        name: 'James'
      },
      { 
        id: 2,
        message: 'I hated it',
        name: 'Bob'
      }
    ]
  },
  {
    id: 3,
    title: 'A product',
    description: 'It exists',
    price: 17,
    currency: 'EUR',
    discount: false,
    recommended: false,
    opinions: [
      { 
        id: 1,
        message: 'I have it',
        name: 'Harry'
      }
    ]
  },
  {
    id: 4,
    title: 'Another fancy product',
    description: 'Also good',
    price: 80,
    currency: 'USD',
    discount: false,
    recommended: true,
    opinions: [
      { 
        id: 1,
        message: 'I liked it as well',
        name: 'Fred'
      },
      { 
        id: 2,
        message: 'I liked it so much',
        name: 'Bob'
      },
      { 
        id: 3,
        message: 'I just liked it',
        name: 'Sam'
      }
    ]
  },
  {
    id: 5,
    title: 'Who knows what',
    description: 'Someone must',
    price: 27,
    currency: 'USD',
    discount: true,
    recommended: false,
    opinions: [
      { 
        id: 1,
        message: 'What is this',
        name: 'Clark'
      }
    ]
  }
]

export default initialProducts