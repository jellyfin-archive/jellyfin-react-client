import React, { ReactElement } from "react";

import { useSelector, RootState } from "../utilities/storage/store";

interface ConditionalComponentProps {
  children: ReactElement;
  condition: (state: RootState) => boolean;
  fallback?: ReactElement;
}

/**
 * Conditionally render children components based on data in Redux. A fallback component can optionally be provided
 * to render when the condition is false.
 * 
 * @param fallback Component to render when not rendering the children components. 
 * @param condition A Redux selector to be passed to useSelector, determining whether or not the children components render.
 */
const Conditional: React.FC<ConditionalComponentProps> = ({ children, fallback, condition }: ConditionalComponentProps) => {

    const result = useSelector(condition)
    return <>{result ? children : fallback}</>
}

export default Conditional;
