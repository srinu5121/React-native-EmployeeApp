import API from '@middleware';

const url = 'http://10.0.2.2:5000/api/Mongodb/people';
const method = 'GET';

export function GetData() {
  console.log("working in actions")
  return async dispatch => {
    const data = await API(url, method);
    dispatch({
      type: 'FETCH_EMP',
      data
    });
    return data;
  };
}
