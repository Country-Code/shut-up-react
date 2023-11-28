import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import PasswordForgoten from "./pages/PasswordForgoten";
import NotFound from "./pages/NotFound";
import ResetPassword from './pages/ResetPassword';
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/password-forgoten' element={<PasswordForgoten />} />
        <Route path="/reset-password/:token"  element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
