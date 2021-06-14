import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Route
          path='/Artist/:artistId'
          exact
          render={(routerProps) => <Artist {...routerProps} />}
        />
        <Route
          path='/Album/:albumId/:name'
          exact
          render={(routerProps) => <Album {...routerProps} />}
        />
      </Router>
    </div>
  );
}

export default App;
