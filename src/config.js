const API_BASE_URL = 'https://kitsu.io/api/edge/';

export const getApiResult = async queryString => {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(res => {
    return res.json();
  });
  return response;
};
