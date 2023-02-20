import './App.css';
import Item from './components/item';
import Cart from './components/cart';


function App() {
  return (
    <div className="App">
      <Item name="Ipad 10 Gen" price="50000" />
      <Item name="Macbook Air" price="100000" />
      <Item name="Iphone 14 Pro Max" price="150000" />
      <br/>
      <Cart/>
    </div>
  );
}

export default App;
