import './App.css';
import TopNav from './components/Navigation/topNav';
import "./styles/index.js"
import Slider from './lib/Slider/Slider';
import Layout from './lib/Layout/layout';
import Home from './components/Page/Home/Home';

function App() {

  const layoutStyle = {

            parent : {
                        column: "1fr 1fr",
                        // row : "1fr 1fr",
                        background: "silver",
                    },
                1 : {
                    alignSelf: "center",
                    justifySelf: "center",
                    textAlign : "center"
                },
                2 : {
                  alignSelf: "center",
                  justifySelf: "center",
                  textAlign : "center"
              }

  }
  return (
    <div className="App">
         <TopNav Class="top-nav"/>
         <Home/>
    </div>
  );
}

export default App;
