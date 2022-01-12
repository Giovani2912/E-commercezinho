import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state=>state.user.currentUser); 
  return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/products/:category" component={ProductList}/>
                <Route path="/product/:id" component={Product}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/cart" component={Cart}/>

            </Switch>
        </BrowserRouter>
  );
};

export default App;