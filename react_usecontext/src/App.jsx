import Header from './components/Header'
import Home from './components/Home'
import UserContext from './UserContext';
import { useState, useContext } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({ username: "", lastLogIn: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App
