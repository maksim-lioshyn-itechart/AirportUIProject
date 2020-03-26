export default class DummyAirportApiService {

    _userRoles = [
        {
            id: '00000000-0000-0000-0000-000000000001',
            name: 'Admin [TEST DATA]'
        },

        {
            id: '00000000-0000-0000-0000-000000000002',
            name: 'User [TEST DATA]'
        }
    ];

    getAllUserRoles = async () => {
        return this._userRoles;
    };

    getAllUserRoleById = async (id) => {
        return this._userRoles[0];
    };
}
