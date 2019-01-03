export default function albumsReducer(state = {}, action) {
    switch (action.type) {
        case 'GET_ALBUMS': {
            //console.log('getAlbums reducer ', action.data);
            if (action.data) return action.data;
            else return state;
        }
        default:
            return state;
    }
}
