import './App.css';
import React, { useState, useEffect } from 'react';
import products from './data/product';
import Products from './Products';

function App() {

  const [search, setSearch] = useState('')
  // useEffect(handleSearch, [search])

  return (
    <div className="App">
      <header className="bar">
        <h1>Webshop</h1>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search for products" />
      </header>
      <Products items={products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())) } />

    </div>
  );
}

export default App;
