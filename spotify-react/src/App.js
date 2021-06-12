import './App.css';
//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Artist from './pages/Artist';
import Album from './pages/Album';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact render={() => <Home />} />
        <Route path='/Artist' exact render={() => <Artist />} />
        <Route path='/Album' exact render={() => <Album />} />
      </Router>
    </div>
  );
}

export default App;
