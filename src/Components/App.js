import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles'
import Header from './ui/Header'
import theme from '../Components/ui/Theme'
import Footer from '../Components/ui/Footer'
import Landing from '../Components/Landing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>revolution</div>}
          />
          <Route exact path='/contact' component={() => <div>contact</div>} />
        </Switch>
      </Router>
      
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
