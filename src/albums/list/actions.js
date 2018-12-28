import API from '@middleware';

const url = 'https://rallycoding.herokuapp.com/api/music_album';
const method = 'GET';

export function getAlbums() {
  return async dispatch => {
    const data = await API(url, method);
    dispatch({
      type: 'GET_ALBUMS',
      data
    });
    return data;
  };
}
