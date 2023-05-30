import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import Destination from './components/destinations/Destination';

import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (

    <>
      <BrowserRouter className="App">
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/destination" exact element={<Destination />}/>
            
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
