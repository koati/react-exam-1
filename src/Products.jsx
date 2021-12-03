import React from 'react'
import Product from './Product';

const Products = ({ items }) => {
  return (
    <section className="container">
      {!items.length && <p className="sorry">Sorry, no products found</p>}
      { items.map(product => <Product product={product} /> )} 
    </section>
  )
}

export default Products
