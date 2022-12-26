import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

import withPageAuthRequired from '../../components/auth/withPageAuthRequired';
import Layout from '../../components/layouts/basic';

const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);

const Posts = () => {
  const { data, error } = useSWR('http://localhost:3000/api/v1/posts', fetcher);
  if (error) return <div>oops... {error.message}</div>;
  if (data === undefined) return <div>Loading...</div>;

  return (
    <Layout>
      <h1>投稿一覧</h1>
      <div>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
      <Link href='/posts/new' data-testid='posts-new'>
        新規投稿
      </Link>
    </Layout>
  );
};

export default withPageAuthRequired(Posts);
