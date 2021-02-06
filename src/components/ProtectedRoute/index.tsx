import React from 'react';

import {
  Route, Redirect
} from 'react-router-dom';

const ProtectedRoute = ({component, isAuthenticated, ...rest}: any) => {
  return (
    <Route
      {...rest}
      render={props => {
        if(isAuthenticated){
          return React.createElement(component, props);
        }
        return <Redirect
          to={{
            pathname: "/login",
            state: {from: props.location}
          }}
        />
      }}
    />
  ); 
};

export default ProtectedRoute;