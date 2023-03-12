import './App.css';
import TopNav from './components/Navigation/topNav';
import "./styles/index.js"
import Home from './components/Page/Home/Home';

function App() {

  return (
    <div className="App">
         <TopNav Class="top-nav"/>
         <Home/>
    </div>
  );
}

export default App;
