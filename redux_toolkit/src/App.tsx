import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { login, logout } from './redux/authSlice';
// Import login and logout action creators

const App = () => {
  const [username, setUsername] = useState('');
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // Get isAuthenticated from Redux store
  // Get isAuthenticated from Redux store
  const dispatch = useDispatch(); // Get the dispatch function from React-Redux

  // Handler for the login button click
  const handleLogin = () => {
    dispatch(login(username)); // Dispatch the login action with the username
  };

  // Handler for the logout button click
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (
    <div>
      {/* Conditional rendering based on isAuthenticated */}
      {isAuthenticated ? (
        <>
          <p>Welcome, {username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;

