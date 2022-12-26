import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import withPageAuthRequired from '../../components/auth/withPageAuthRequired';
import Layout from '../../components/layouts/basic';

const New = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const onClick = () => {
    const params = {
      title: title,
      body: body,
    };

    axios
      .post('http://127.0.0.1:3000/api/v1/posts', params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setState(e.target.value);
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({});
        setToken(accessToken);
      } catch (e) {
        console.log(e.message);
      }
    };
    getToken();
  }, []);

  return (
    <Layout>
      <h1>新規投稿</h1>
      <label htmlFor=''>タイトル</label>
      <input
        type='text'
        value={title}
        onChange={(e) => {
          onChange(e, setTitle);
        }}
      />
      <br />
      <label htmlFor=''>本文</label>
      <input
        type='text'
        value={body}
        onChange={(e) => {
          onChange(e, setBody);
        }}
      />
      <br />
      <button onClick={onClick}>新規投稿</button>
    </Layout>
  );
};

export default withPageAuthRequired(New);
