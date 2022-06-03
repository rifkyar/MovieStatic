import './App.css';
import Introd from './components/Head';
import Navibar from './components/Navbar';
import SuperHero from './components/SuperHero';
import Trend from './components/Trending';
import "./styles/pageStyles.css";
function App() {
  return (
    /*Navbar*/
    <div>
      <div className="back">
        <Navibar />
        <Introd />
      </div>
      <div className="trendingback">
        <Trend />
      </div>
      <div className="superback">
        <SuperHero />
      </div>
    </div>
    /*Navbar*/

  );
}

export default App;
