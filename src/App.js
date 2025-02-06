import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import StudentsPage from './pages/StudentsPage';
import { auth } from './firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';

function App() {
  const [user, loading] = useAuthState(auth);  // Check if user is authenticated

  if (loading) {
    return <div>Loading...</div>;  // Optional: Show a loader while checking authentication
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect to StudentsPage if logged in, else show Login */}
          <Route path="/" element={user ? <Navigate to="/students" /> : <Login />} />
          
          {/* Protect StudentsPage, redirect to login if not authenticated */}
          <Route path="/students" element={user ? <StudentsPage /> : <Navigate to="/" />} />

          {/* Handle unknown routes */}
          <Route path="*" element={<div>404: Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

