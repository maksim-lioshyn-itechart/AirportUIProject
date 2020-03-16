import "./UserRole.sass";
import React from "react";
import { insertRow, saveCell, deleteRow } from '../common/operations';

function template() {
  return (
    <div className="user-role">
      <h1>UserRole</h1>
    </div>
  );
};

export function onInsertRow(model) {
    insertRow('UserRole/Post', { name: model.name })
        .then(response => {
            if (response.ok) {
                alert('Added: ' + model.name)
            }
            throw new Error(response.statusText);
        })
}

export function onSaveCell(value) {
    saveCell('UserRole/Update', value)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        }
        )
}

export function onDeleteRow(rowKeys) {
    rowKeys.map(key => deleteRow('UserRole/Delete', key));
}


export default {template, onDeleteRow, onInsertRow, onSaveCell};

