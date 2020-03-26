import React, { Component } from "react";
import { UserRoleList, getAllUserRoles } from './user-role.jsx'

export default class UserRole extends Component {

  state = {
    userRoles: []
  }

  componentDidMount() {
    getAllUserRoles()
      .then(response => {
        this.setState({
          userRoles: response
        })
      });
  }

  render() {
    return (
      <div>
{ UserRoleList }
      </div>
      
    );
  }
}