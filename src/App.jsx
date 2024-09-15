import { useState } from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import LoginPopUp from './Components/LoginPopUp';
function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
      { login ? <LoginPopUp /> : <></> }
      <Header />
      <Outlet />
    </>
  )
}
export default App;
