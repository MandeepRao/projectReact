import { useState } from 'react'
import './App.css'
import { User } from './User';
import MyContext from './ContextProvider/ContextProvider';


function App() {
  const [userData, setUserData] = useState(null);
  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      <User />
      <div>React context api learning</div>
    </MyContext.Provider >
  )
}

export default App
