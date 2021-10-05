import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import OrderReview from './components/orderReview/OrderReview';
import Inventory from './components/inventory/Inventory';
import NotFound from './components/notFound/NotFound';
import PlaceOrder from './components/placeOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='/placeorder'>
           <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
