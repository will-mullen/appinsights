// App.js
import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Products from './Pages/Products';
import FirstPage from './FirstPage';
import Home from './Home';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/firstPage" element={<FirstPage />} />
       </Routes>
    </>
 );
};

export default App;