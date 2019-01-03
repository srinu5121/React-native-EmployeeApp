import API from '@middleware';

const url = 'https://jsonplaceholder.typicode.com/users';
const method = 'GET';

export function getAlbums() {
  console.log("working in action")
  return async dispatch => {
    const data = await API(url, method);
    dispatch({
      type: 'GET_ALBUMS',
      data
    });
    return console.log(data , "actionpayloaf");
  };
}
