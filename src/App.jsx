import './App.css'
import "./reset.css"
import React, { useState } from 'react';

  const productList = [
    {
      name: 'Waffle with Berries',
      category: 'Waffle',
      price: 6.5,
      img: "src/assets/images/waffle.jpg"
    },
    {
      name: 'Vanilla Bean Crème Brûlée',
      category: 'Crème Brûlée',
      price: 7.0,
      img: "src/assets/images/vanilla-bean.jpg"
    },
    {
      name: 'Macaron Mix of Five',
      category: 'Macaron',
      price: 8.0,
      img: "src/assets/images/macaron.jpg"
    },
    {
      name: 'Classic Tiramisu',
      category: 'Tiramisu',
      price: 5.5,
      img: "src/assets/images/tiramisu.jpg"
    },
    {
      name: 'Pistachio Baklava',
      category: 'Baklava',
      price: 4.0,
      img: "src/assets/images/baklava.jpg"
    },
    {
      name: 'Lemon Meringue Pie',
      category: 'Pie',
      price: 5.0,
      img: "src/assets/images/lemon-pie.jpg"
    },
    {
      name: 'Red Velvet Cake',
      category: 'Cake',
      price: 4.5,
      img: "src/assets/images/strawberry-cake.jpg"
    },
    {
      name: 'Salted Caramel Brownie',
      category: 'Brownie',
      price: 4.5,
      img: "src/assets/images/caramel-brownie.jpg"
    },
    {
      name: 'Vanilla Panna Cotta',
      category: 'Panna Cotta',
      price: 6.5,
      img: "src/assets/images/vanilla-cotta.jpg"
    },
  ];

function App() {
  return (
    <div className='container'>
      <h1>Desserts</h1>
      <div className="cart">
        <Cart />
        <Basket/>
      </div>
    </div>
  )
}


function Cart() {
  const cartItems = productList.map(x => <CartItem key={x.name} img={x.img} category={x.category} name={x.name} price={x.price} />)
  return (
    cartItems
  )
}

function CartItem({img , category, name, price}) {

  const [quantity, setQuantity] = useState(0);
  
  function handleAddToCart() {
    setQuantity(1);
    
  }

  function handleAdd() {
    setQuantity(quantity+1);
  }

  function handleDecrease() {
    if(quantity >= 0) {
      setQuantity(quantity-1)
    }else {
      setQuantity(0);
    }
  }



  return (
    <div className='cart-item'>
      <img src={img} alt={name}/>
      <div className="buttons">
        {quantity === 0 ? (
          <div className="add-to-cart"  onClick={handleAddToCart}>
            <img className="cart-img" src="src/assets/images/shopping-cart.svg" />
            <span>Add To Cart</span>
          </div>
        ) : (
          <div className="quantity-controls">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleAdd}>+</button>
          </div>
        )}
      </div>
      <h4>{category}</h4>
      <h3>{name}</h3>
      <h5> ${price.toFixed(2)}</h5>
    </div>
  )
}


function Basket({ quantity }) {
  return (
    <div className="basket-area">
      {quantity > 0 ? (
        <>
          <h2>Your Cart</h2>
          <div className="result-flex">
            <div>
              <h6>Classic Tiramisu</h6>
              <div>
                <span>1x</span>
                <span>@5.50</span>
                <span>5.50</span>
              </div>
              <div className="x">
                <span>x</span>
              </div>
            </div>
          </div>
          <div className="order-total">
            <h6>Order Total</h6>
            <h3>$46.50</h3>
          </div>
          <div className="carbon-area">
            <img src="src/assets/images/carbon_tree.svg" />
            <h5>This is a carbon-neutral carbon-neutral</h5>
          </div>
          <button>Confirm Order</button>
        </>
      ) : (
        <>
          <h2>Your Cart(0)</h2>
          <img src="src/assets/images/basket cake.png" />
          <h6>Your added items will appear here</h6>
        </>
      )}
    </div>
  );
}


export default App;



      