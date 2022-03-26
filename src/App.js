import './App.css';
import Footer from './Components/includes/Footer';
import Header from './Components/includes/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header />
      <div style={{ margin: "auto", width: "95%" }}>
        <Shop />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
