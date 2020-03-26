import React, { Component } from 'react';
import './app.scss';
import config from '../../config.json';
import UserRole from '../UserRole'
import Header from '../header';
import LeftSidebar from '../left-sidebar';
import ErrorBoundry from '../error-boundry';
import AirportApiService from '../../Services/airport-api-service';
import { AirportApiServiceProvider } from '../airport-api-service-context';

export default class App extends Component {

  state = {
    swapiService: new AirportApiService(),
    isLoggedIn: false
  };

  render() {
    return (
      <ErrorBoundry>
        <AirportApiServiceProvider value={this.state.swapiService} >

          <div className="airport-app">
            <div className="wrapper">
              <Header />
              <LeftSidebar />
              <div className="middle">
                <div className="container">
                  <main className="content">
                    {config.azureUrl}
                    <UserRole />
                  </main>
                </div>
                <LeftSidebar />
              </div>
            </div>
          </div>

        </AirportApiServiceProvider>
      </ErrorBoundry>
    );
  }
}