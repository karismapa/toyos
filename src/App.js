import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/login' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
