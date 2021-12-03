import React, { useState } from 'react'

const Product = ({ product, search }) => {

  const [showPrice, setShowPrice] = useState(true)

  return (
    <div className="card">
      <header>
        <h2>{product.title}</h2>
      </header>
      <hr />
      <main>
        {showPrice && 
          <>
            <p>{product.description}</p>
            <p>{product.price} <span>{product.currency}</span> </p>
          </>
        }
        {!showPrice && 
          product.opinions.map(opinion => 
            <>
              <p>{opinion.message}</p>
              <p className="name">({opinion.name})</p>
            </>
          )
        }
      </main>
      <hr />
      <footer className="bar">
        <button onClick={() => setShowPrice(!showPrice)}>{showPrice ? 'Show opinions' : 'Show description' }</button>
        <button disabled={true}>Add to cart</button>
      </footer>
      { product.discount && <p className="discount">Discount</p>}
      { product.recommended && <div className="recommended">For You</div>}
    </div>
  )
}

export default Product
