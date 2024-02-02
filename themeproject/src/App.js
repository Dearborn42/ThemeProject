import { useContext } from 'react';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import { ThemeContextWrapper } from './Components/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContextWrapper);
  return (
    <div className={`App App-${theme}`}>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
