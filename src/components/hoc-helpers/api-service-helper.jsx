import React from 'react';
import { AirportApiServiceConsumer } from '../airport-api-service-context';

const apiServiceHelper = (Wrapped, mapMethodsToProps) => {

    return (props) => {
      return (
        <AirportApiServiceConsumer>
          {
            (apiService) => {
              const serviceProps = mapMethodsToProps(apiService);
  
              return (
                <Wrapped {...props} {...serviceProps} />
              );
            }
          }
        </AirportApiServiceConsumer>
      );
    }
  };

export default apiServiceHelper;