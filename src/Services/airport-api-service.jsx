import { azureUrl } from '../../src/config.json';

// export function insertRow(route, value) {
//   return fetch(url + route, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(value)
//   })
// }

// export async function saveCell(route, value) {
//   return await fetch(url + route, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(value)
//   });
// }

// export function deleteRow(route, key) {
//   return fetch(url + route + "/" + key,
//       {
//         method: "DELETE"
//       })
// }

export default class AirportApiService {

  _apiBaseUrl = azureUrl;

  getResource = async (url, options) => {
    const resource = await fetch(`${this._apiBaseUrl}${url}`, options);

    if (!resource.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${resource.status}`);
    }

    return await resource.json();
  }

  getAll = async (url) => {
    return await this.getResource(`${url}`, {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
    });
  }

  getById = async (url, id) => {
    return await this.getResource(`${url}/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
    });
  }

  getAllUserRoles = async () => {
    const result = await this.getAll('api/UserRole/Get');

    return result
      .map(this._transformToDictionary);
  }

  getAllUserRoleById = async (id) => {
    const result = await this.getAll(`api/UserRole/Get/${id}`);
    return result;
  }

  _transformToDictionary = (item) => {
    return {
      id: item.id,
      name: item.name
    }
  }

}