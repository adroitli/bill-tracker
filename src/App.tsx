import './App.css';

import Dashboard from './pages/Dashboard';
import AddBillPage from './pages/AddBillPage';
import Settings from './pages/Settings'
import NotFound from './pages/NotFound';
import Login from './pages/Login';

import ProtectedRoute from './components/ProtectedRoute';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} exact/>
          <ProtectedRoute isAuthenticated path='/' component={Dashboard} exact/>
          <ProtectedRoute path='/add' component={AddBillPage} exact/>
          <ProtectedRoute path='/settings' component={Settings} exact />          
          <ProtectedRoute component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
