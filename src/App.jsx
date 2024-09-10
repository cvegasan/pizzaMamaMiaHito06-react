import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


// Componentes LOGIN y REGISTRO
import Home from './pages/Home';
import Login from './pages/FormLogin';
import Register from './pages/FormRegistro';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

//React Router DOM
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

//useContext
import CartProvider from "./context/CartContext";

function App() {
  return (
    //App.jsx se mostrarán los componentes Navbar, Home y Footer
    <CartProvider>
      <BrowserRouter>
            <NavBar></NavBar>
              <Routes>
                <Route path="/pizzaMamaMiaHito06-react" element={<Home/>} />
                <Route path="/pizzaMamaMiaHito06-react/register" element={<Register/>} />
                <Route path="/pizzaMamaMiaHito06-react/login" element={<Login/>} />
                <Route path="/pizzaMamaMiaHito06-react/pizza/p001" element={<Pizza/>} />
                <Route path="/pizzaMamaMiaHito06-react/profile" element={<Profile/>} />
                <Route path="/pizzaMamaMiaHito06-react/cart" element={<Cart/>} />

                <Route path='/pizzaMamaMiaHito06-react/404' element={<NotFound/>} />
                <Route path='*' element={<Navigate replace to='/pizzaMamaMiaHito06-react/404'/>} />
              </Routes>
            <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App;
