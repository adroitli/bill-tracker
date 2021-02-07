import './App.css';
// import './assets/app';

import Dashboard from './pages/Dashboard';
import AddBillPage from './pages/AddBillPage';
import Settings from './pages/Settings'
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { connect } from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean | null;
}

function App(props: Props) {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} exact/>
          <ProtectedRoute isAuthenticated={props.isAuthenticated} path='/' component={Dashboard} exact/>
          <ProtectedRoute isAuthenticated={props.isAuthenticated} path='/add' component={AddBillPage} exact/>
          <ProtectedRoute isAuthenticated={props.isAuthenticated} path='/settings' component={Settings} exact />          
          <ProtectedRoute isAuthenticated={props.isAuthenticated} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (rootState: any) => {
  return {
    isAuthenticated: rootState.authReducer.isAuthenticated,
  }
}

export default connect(mapStateToProps)(App);
