import React, { Component } from 'react';
import { UserRole, UserRoleDetails } from '../user-role'

import ItemList from '../item-list'
import { apiServiceHelper, dataHelper, dataWithChildFunction } from '../hoc-helpers';

const templateRender = ({ name }) => <span>{name}</span>;

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllUserRoles
  };
};

const UserRoleList = apiServiceHelper(
  dataHelper(
    dataWithChildFunction(ItemList, templateRender)),
  mapMethodsToProps);


export default class UserRolePage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <div>
        <UserRoleList onItemSelected={this.onItemSelected} />
        <UserRoleDetails itemId={selectedItem} />
      </div>

    );
  }

}