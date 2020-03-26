import React, { Component } from 'react';
import { getAllUserRoleById } from './user-role.jsx'

export default class UserRoleDetails extends Component {

  state = {
    item: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }
    
    getAllUserRoleById(itemId)
      .then((item) => {
        this.setState({
          item
        });
      });
  }

  render() {
    const { item } = this.state;
    
    if (!item) {
      return <span>Select a item from a list</span>;
    }
    
    const { id, name } = item;

    return (
      <div>
      {id}, <br />
      {name}
      </div>
    );
  }
}
