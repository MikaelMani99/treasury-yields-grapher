import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import YieldsDay from './views/YieldsDay';
import YieldsChart from './views/YieldsChart';
import Container from './components/Container';
import Header from './components/Header'

function App() {
  return (
    <div className="App font-mono">
      <Container className="container mx-auto">
        <Header />
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/yields-day" component={YieldsDay} />
          <Route exact path ="/yields-chart" component={YieldsChart} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
