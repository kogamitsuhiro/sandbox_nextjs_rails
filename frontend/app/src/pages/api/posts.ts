import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default withApiAuthRequired(async (req, res) => {
  const { accessToken } = await getAccessToken(req, res);
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  const { data, status } = await api.get('/posts');

  res.status(status).json(data);
});
