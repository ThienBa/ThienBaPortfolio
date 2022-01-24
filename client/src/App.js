import './App.css';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PortfolioContainer from './components/PortfolioContainer';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      <BackToTop />
    </div>
  );
}

export default App;
