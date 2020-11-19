import React from 'react';
import UneroServiceContext from '../uneroServiceContext';

const WithUneroService = () => (Wrapped) => {
  return (props) => {
    return (
      <UneroServiceContext.Consumer>
        {
          (RestoService) => {
            return <Wrapped {...props} RestoService = {RestoService}/>;
          }
        }
      </UneroServiceContext.Consumer>
    );
  };
};

export default WithUneroService;
