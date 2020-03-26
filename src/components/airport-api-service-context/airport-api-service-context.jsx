import React from 'react';

const {
  Provider : AirportApiServiceProvider,
  Consumer : AirportApiServiceConsumer
} = React.createContext();

export {
  AirportApiServiceProvider,
  AirportApiServiceConsumer
};