import './App.css';
import { observer } from 'mobx-react';
import { useRef, useState } from 'react';
import Item from './component/item';
function App(props) {

  const [nameInput, setNameInput] = useState('');
  const [quantityInput, setQuantityInput] = useState(0);
  const [priceInput, setPriceInput] = useState(0);
  const inputRef = useRef();

  
  return (
 
    <div className="App">
    <h1>{props.invoice.status()}</h1>
    {!props.invoice.is_paid &&
    <button 
    onClick={props.invoice.markPaid}
    >Pay</button>
    }

    <form 
    onSubmit={e=>{
      e.preventDefault(); 
      props.invoice.itemList.add({
        quantity: parseInt(quantityInput),
        name: nameInput,
        price: parseFloat(priceInput),
      }) 
      setNameInput('');
      setQuantityInput(0);
      setPriceInput(0);

      inputRef.current.focus();
    }
    
  }
    >
      <label htmlFor='name' >
         Name:
         <input ref={inputRef} type='text' value={nameInput} onChange={event=>(setNameInput(event.target.value))} id='name' />
      </label>
      <label htmlFor='name'>
         Quantity:
         <input type='number'value={quantityInput} onChange={event=>(setQuantityInput(event.target.value))} id='quantity' />
      </label>
      <label htmlFor='name'>
         Price:
         <input type='text' value={priceInput} onChange={event=>(setPriceInput(event.target.value))} id='price' />
      </label>
      <button type='submit'>Add</button>
    </form>

   
    <strong>Total Cost ${props.invoice.itemList.total().toFixed(2)}</strong>
   { props.invoice.itemList.items.map((item, index)=>(
     <Item key={index} item={item}/>
     
     ))}

   
    </div>
  );
}

export default observer(App);
