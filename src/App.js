import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Calls from "./components/home/calls";
import Conversation from "./components/home/conversation/Conversation";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import PasswordForgoten from "./pages/PasswordForgoten";
import NotFound from "./pages/NotFound";
import ResetPassword from './pages/ResetPassword';
import { ToastContainer } from 'react-toastify';
import "./styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Calls />}/>
            <Route path='/calls' element={<Calls />}/>
            <Route path='/conversation/' element={<Conversation />}>
              <Route path=':id' element={<Conversation />} />
            </Route>
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/password-forgoten' element={<PasswordForgoten />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
