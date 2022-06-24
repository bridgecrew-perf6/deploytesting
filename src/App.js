import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
const App = () => {
    return (
    <Routes> // Allows to register route level components
      <Route path='/' element={<Navigation />}>
        <Route index = {true} element ={ <Home /> } /> // Will render the component when it matches the route your looking for
        <Route path='shop/*' element={<Shop />} />
        <Route path = 'auth' element = { <Authentication /> }/>
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
