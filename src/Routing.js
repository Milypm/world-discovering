import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

const Routing = () => {
  <BrowserRouter>
    <Routes>
    {/* <Switch> */}
      <Route path="/" element={<Home />} />
    {/* </Switch> */}
    </Routes>
  </BrowserRouter>
}
export default Routing;