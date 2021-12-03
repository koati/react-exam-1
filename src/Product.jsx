import React, { useState } from 'react'

const Product = ({ product, search }) => {

  const [showPrice, setShowPrice] = useState(true)

  return (
    <div className="card">
      <h2>{product.title}</h2>
      <hr />
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
            <p>({opinion.name})</p>
          </>
        )
      }
      <hr />
      <div className="bar">
        <button onClick={() => setShowPrice(!showPrice)}>{showPrice ? 'Show opinions' : 'Show description' }</button>
        <button disabled={true}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product
