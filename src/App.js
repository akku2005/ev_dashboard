import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";


const SignIn = lazy (()=> import("./auth/Login/AuthLogin"))

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
      <Router>
        <Suspense fallback={<Loader/>}>
        <Routes>
          {/* Redirect to login page if not authenticated */}
          {!isLoggedIn && <Route path="/" element={<Navigate to="/login" />} />}
          {/* Use the route from the routes.js file */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {/* Login route */}
          <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
        </Routes>
        </Suspense>
      </Router>
    
  );
}

export default App;



