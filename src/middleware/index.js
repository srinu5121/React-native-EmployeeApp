import axios from 'axios';

const API = async (url, method, body) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  const data = body ? JSON.stringify(body) : null;

  let reqObj = { url, method, headers, data };

  method === 'GET' ? delete reqObj.data : null;

  return await new Promise(async resolve => {
    try {
      const response = await axios({ url, method, headers, data });
      resolve(response);
    } catch (err) {
      //console.log(err.message);
      const error = { error: err.message };
      resolve(error);
    }
  });
};

export default API;
