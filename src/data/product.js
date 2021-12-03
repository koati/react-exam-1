const initialProducts = [
  {
    title: 'Some fancy product',
    description: 'Soo good because soo good',
    price: 70,
    currency: 'USD',
    discount: false,
    recommended: false,
    opinions: [
      { 
        message: 'I liked it',
        name: 'Fred'
      },
      { 
        message: 'I liked it so much',
        name: 'John'
      }
    ]
  },
  {
    title: 'Not so fancy product',
    description: 'Not so good because not so good',
    price: 7,
    currency: 'USD',
    discount: true,
    recommended: true,
    opinions: [
      { 
        message: 'I did not like it',
        name: 'James'
      },
      { 
        message: 'I hated it',
        name: 'Bob'
      }
    ]
  },
  {
    title: 'A product',
    description: 'It exists',
    price: 17,
    currency: 'EUR',
    discount: true,
    recommended: false,
    opinions: [
      { 
        message: 'I have it',
        name: 'Harry'
      }
    ]
  },
  {
    title: 'Another fancy product',
    description: 'Also good',
    price: 80,
    currency: 'USD',
    discount: false,
    recommended: true,
    opinions: [
      { 
        message: 'I liked it as well',
        name: 'Fred'
      },
      { 
        message: 'I liked it so much',
        name: 'Bob'
      },
      { 
        message: 'I just liked it',
        name: 'Sam'
      }
    ]
  },
  {
    title: 'Who knows what',
    description: 'Someone must',
    price: 27,
    currency: 'USD',
    discount: true,
    recommended: false,
    opinions: [
      { 
        message: 'What is this',
        name: 'Clark'
      }
    ]
  }
]

export default initialProducts