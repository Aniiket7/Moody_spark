
import './App.css';

import { Route, Routes } from "react-router-dom";

import Home from './Home/Home';
import Signup from './Nav/Signup';
import PageNotFound from './Home/PageNotFound';
import Login from './Nav/Login';
import About from './About/About';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';
import Item from './Item/Item';
import Update from './User/Update';
import Order from './Shop/Order';
import Sizechart from './Shop/Sizechart';
import Dashbord from './Admin/Dashbord'
import UpdateDashboard from './Admin/UpdateDashboard';
import ManageOrders from './Admin/ManageOrders';
import Cart from './Cart/Cart';
import Pay from './Payment/Pay';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/item/:id" element={<Item id={1} />} />
        <Route path="/update" element={<Update />} />
        <Route path="/orders/history" element={<Order />} />
        <Route path="/sizechart" element={<Sizechart />} />
        <Route exact path="/admin" element={<Dashbord />}  />
        <Route path="/admin/update/:id" element={<UpdateDashboard/>} />
        <Route path="/admin/manage" element={<ManageOrders/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/pay" element={<Pay/>} />
      </Routes>
    </div>
  );
}

export default App;
