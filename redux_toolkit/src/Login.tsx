
// Step 4: Create Authentication Components

// Example: Login Component
// Login.tsx
import{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function from React-Redux

  // Handler for the login button click
  const handleLogin = () => {
    dispatch(login(username)); // Dispatch the login action with the username
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

