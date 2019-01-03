export default function EmployeeList(state = {}, action) {
    switch (action.type) {
        case 'FETCH_EMP': {
          console.log("working in reducers")
            //console.log('getAlbums reducer ', action.data);
            if (action.data) return action.data;
            else return state;
        }
        default:
            return state;
    }
}
