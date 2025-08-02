import { useState } from 'react'
import './assets/CSS/style.css'
import Main from './components/Main'
import Register from './components/Register'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Hearder from './components/Hearder'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './components/AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Hearder />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App
