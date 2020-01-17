import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import MainPage from './Containers/MainPage/MainPage';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
