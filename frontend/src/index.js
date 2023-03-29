import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import { ChakraProvider, Text } from '@chakra-ui/react'
import PageNotFound from './Home/PageNotFound';
import Signup from './Nav/Signup';
import Login from './Nav/Login';
import Home from './Home/Home';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <React.StrictMode>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>


        </Routes> */}
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);


