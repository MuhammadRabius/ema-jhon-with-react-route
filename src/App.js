import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route } from "react-router-dom";
import Order from './components/Order/Order';
import Inventoery from './components/Inventoey/Inventoery';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop'  element={<Shop></Shop>}></Route>
        <Route path='/orders'  element={<Order></Order>}></Route>
        <Route path='/inventory' element={<Inventoery></Inventoery>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
