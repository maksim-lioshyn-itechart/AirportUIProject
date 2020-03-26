import React from "react";

import ItemList from '../item-list'
import AirportApiService from "../../Services/airport-api-service";
import { apiServiceHelper, dataHelper, dataWithChildFunction } from '../hoc-helpers';

import "./user-role.scss";

const templateRender = ({ id, name }) => <span>{id}, {name}</span>;

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getAllUserRoles
    };
};

export const { getAllUserRoles, getAllUserRoleById } = new AirportApiService();

export const UserRoleList = apiServiceHelper(
    dataHelper(
      dataWithChildFunction(ItemList, templateRender)),
    mapMethodsToProps);

export default { UserRoleList, getAllUserRoles, getAllUserRoleById };

// import { insertRow, saveCell, deleteRow } from '../../Services/operations';

// export function onInsertRow(model) {
//     insertRow('UserRole/Post', { name: model.name })
//         .then(response => {
//             if (response.ok) {
//                 alert('Added: ' + model.name)
//             }
//             throw new Error(response.statusText);
//         })
// }

// export function onSaveCell(value) {
//     saveCell('UserRole/Update', value)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//         }
//         )
// }

// export function onDeleteRow(rowKeys) {
//     rowKeys.map(key => deleteRow('UserRole/Delete', key));
// }
