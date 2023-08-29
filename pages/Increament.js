import React, { useState } from 'react';

const Item = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const zero =() => {
    setCount(count - count);
  };

  return (
    <div className='d-flex'>
      <div className='me-5'>
        <h6>Item</h6>
        <div className='d-flex'>
       <div> <button onClick={increment}>+</button> </div>
        <div><p>{count}</p></div>
      <div> <button  onClick={decrement}>-</button></div>

        </div>
      </div>

      <div>
      <h6 className=''>$00.00</h6>
      <button className='' onClick={zero}>x</button>
      </div>
    </div>
  

    
  );
};

export default Item;
