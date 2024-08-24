import Header from './Components/Header';
import Home from './Pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
