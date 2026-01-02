import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Login from './pages/Auth/Login.jsx'
import SignUp from './pages/Auth/SignUp.jsx'
import Home from './pages/Dashboard/Home.jsx'
import UserProvider from './context/UserContext.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Root />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/signUp' exact element={<SignUp />} />
            <Route path='/home' exact element={<Home />} />
          </Routes>
        </Router>
      </div>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: '13px'
          },

        }}
      />

    </UserProvider>
  )
}

export default App;

const Root = () => {
  //Check if token exists in local storage
  const isAuthenticated = !!localStorage.getItem('token');

  //Redirect based on authentication status
  return isAuthenticated ? (
    <Navigate to="/login" /> 
  ) : (
    <Navigate to="/login" />
    );
};
