import  { useState, useContext } from 'react';
import  UserContext  from '../UserContext';
import moment from 'moment';



  const validatePassword = (password) => {
    // Password must be at least 8 characters long
    // and must contain at least one uppercase letter, one lowercase letter, and one number
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };
  
  export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(UserContext);
    const [invalidPassword, setInvalidPassword] = useState(false);
  
    const handleLogin = (event) => {
      event.preventDefault();
      if (!validatePassword(password)) {
        setInvalidPassword(true);
        return;
      }
  
      const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
      setUser({ username, lastLogIn: currentDate });
      setUsername('');
      setPassword('');
      setInvalidPassword(false);
    };
  
    const handleLogout = () => {
      setUser({ username: '', lastLogIn: '' });
      setUsername('');
      setPassword('');
      setInvalidPassword(false);
    };
  
    return (
      <div>
        {!user.username && (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Login</button>
            {invalidPassword && <p>Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.</p>}
          </form>
        )}
        {user.username && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    );
  }