import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route exact path ="/" component={Home} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
