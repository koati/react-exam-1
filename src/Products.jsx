import React from 'react'

import Product from './Product';

const Products = ({ items }) => {
  return (
    <section className="container">
        { items.map(product => <Product product={product} /> )} 
      </section>
  )
}

export default Products
