import React, { Component } from "react";
import Spinner from '../spinner';
import AirportApiService from "../../Services/airport-api-service";

const { getAll } = new AirportApiService();

export default class UserRole extends Component {

  state = {
    loading: true,
    userRoles: []
  }

  componentDidMount() {
    this.intervalCoordinateId = getAll('api/UserRole/Get')
      .then(response => {
        this.setState({
          userRoles: response,
          loading: false,
        })
      });
  }

  render() {
    const { loading, userRoles } = this.state;

    if (loading) {
      return <Spinner />;
    }

    const listItems = userRoles.map((item) =>
      <li key={item.id}>{item.name}</li>
    );
    console.log(userRoles)
    return (
      <div className="user-role">
        <ul>{listItems}</ul>
      </div>
    );
  }
}



// import { url } from '../../config.json';
// import React from 'react';
// import { BootstrapTable, TableHeaderColumn }
//   from 'react-bootstrap-table'
// import { onDeleteRow, onInsertRow, onSaveCell } from './UserRole';

// class UserRole extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       hidden: true,
//       userRoles: []
//     }
//   }

//   componentDidMount() {
//     this.intervalCoordinateId = this.fetchData();
//   }

//   async fetchData() {
//     await fetch(url + 'UserRole/Get', {
//       method: 'GET',
//       headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
//     })
//       .then(r => r.json())
//       .then(response => this.setState({
//         userRoles: response
//       }));
//   }

//   render() {

//     const options = {
//       afterInsertRow: this.fetchData(),
//       onAddRow: onInsertRow,
//       onDeleteRow: onDeleteRow
//     }

//     const selectRowProp = {
//       mode: 'checkbox'
//     }

//     const cellEditProp = {
//       mode: 'click',
//       afterSaveCell: onSaveCell,
//       blurToSave: true,
//     }

//     return (
//       <div>
//         <BootstrapTable
//           keyField='id'
//           data={this.state.userRoles}
//           insertRow
//           deleteRow
//           selectRow={selectRowProp}
//           cellEdit={cellEditProp}
//           options={options}
//         >
//           <TableHeaderColumn
//             hiddenOnInsert
//             dataField='id'
//             dataSort={true}
//             hidden={this.state.hidden}
//             autoValue>
//             Id
//           </TableHeaderColumn>
//           <TableHeaderColumn
//             dataField='name'
//             dataSort={true}>
//             Name
//           </TableHeaderColumn>
//         </BootstrapTable>
//       </div>
//     )
//   }
// }

// export default UserRole;