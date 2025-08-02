import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Adjust path as needed
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navigation_list from './Components/Navigation/Navigation_list';
import Home from './Components/Home/Home.jsx';
import SignUp from './pages/SignUp/SignUp';
import Contact from './pages/Contact';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn.jsx';
import Product_details from './pages/Product_details/Product_detials.jsx'; // Fixed typo
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import { Cart } from './pages/Cart/Cart.jsx';
import { AuthProvider } from './util/AuthContext.jsx';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div>
          <Header />
          <Navigation_list />
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              }
            />
            <Route
              path="/home"
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/productdetail" element={<Product_details />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;