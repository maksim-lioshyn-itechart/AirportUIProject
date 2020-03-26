import React, { Component } from 'react';
import './app.scss';
import Header from '../header';
import LeftSidebar from '../left-sidebar';
import ErrorBoundry from '../error-boundry';
import AirportApiService from '../../Services/airport-api-service';
import DummyAirportApiService from '../../Services/dummy-airport-api-service';
import { UserRolePage } from '../pages';
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
                    <UserRolePage />
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