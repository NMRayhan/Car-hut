import './App.css';
import Header from './Components/includes/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header />
      <div style={{ margin: "auto", width: "95%" }}>
        <Shop />
      </div>
    </div>
  );
}

export default App;
