import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Style/LandingPage.css';
import IntroApp from './Components/Intro';
import NavigationBar from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className='AppIntro'>
        <IntroApp />
      </div>
    </div>
  );
}

export default App;
