import { observer } from 'mobx-react';
import React from 'react';

function Item({item}) {
    return (
        <div>
         <li>
            {item.name}: {item.quantity} * ${item.price.toFixed(2)} = ${item
            .total()
            .toFixed(2)}
            <button onClick={item.increment}>+</button>
            <button onClick={item.decrement}>-</button>
            <button onClick={item.remove}>x</button>
         </li>
         
        </div>
    );
}

export default observer(Item);