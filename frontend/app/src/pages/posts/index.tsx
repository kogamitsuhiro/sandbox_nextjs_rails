import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

import Layout from '../../components/layouts/basic';

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

export default withPageAuthRequired(function Posts({}) {
  const { data, error } = useSWR('/api/posts', fetcher);
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
});
