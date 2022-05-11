import './App.css';
import About from './components/About';
import Info from './components/Info';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Info />
      <main>
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}

export default App;