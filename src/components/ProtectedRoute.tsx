import React, { useCallback, ComponentType } from 'react';
import { RootState, useSelector } from '../utilities/storage/store';
import { Route, Redirect, RouteProps } from 'react-router';
import Conditional from './Conditional';

interface ProtectedRouteProps {
  validator: (state: RootState) => boolean;
  path: string;
  fallbackPath: string;
  component: ComponentType<{}>;
}

/**
 * Define a protected route that can only be accessed when a provided Redux selector returns true.
 * A fallback route must be provided defining where to send the user if they try to access the 
 * protected route.
 * 
 * @param component The component to render for the route.
 * @param validator Determines whether or not the route is valid.
 * @param fallbackRoute Where to redirect if the route is accessed and validator returns false. 
 */
const ProtectedRoute: React.FC<ProtectedRouteProps & RouteProps> = ({ 
  component: Component,
  validator,
  path,
  fallbackPath,
  ...otherProps
}: ProtectedRouteProps) => {
 
  return (
    <Route path={path} {...otherProps}>
      <Conditional 
        condition={validator} 
        fallback={<Redirect to={fallbackPath} />}
      >
        <Component />
      </Conditional>
    </Route>
  )
}

export default ProtectedRoute
