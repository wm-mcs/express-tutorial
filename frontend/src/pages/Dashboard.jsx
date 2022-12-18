import { useState, useEffect } from 'react';
import './Dashboard.scss';
import PageComponent from '../components/layout/pages/PageComponent';
import PageTitle from '../components/layout/pages/PageTitle';
import PageSubTitle from '../components/layout/pages/PageSubTitle';
import Loader from '../components/Loader';
import LoaderGroup from '../components/LoaderGroup';
import Post from '../components/Post';

import { useFetch } from '../composables/use-fetch';

const Dashboard = () => {
  const { doFetch, loading } = useFetch();
  const [posts, setPosts] = useState([]);
  const getPost = async () => {
    let post = await doFetch(
      `/api/posts`,
      'GET',
      null,
      () => {
        setPosts(post);
      },
      null
    );
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PageComponent
      title="Dashboard"
      description="La descripción de la página del dashboard"
    >
      <div className="dashboard">
        <PageTitle>Posts</PageTitle>

        {posts.length > 0 ? (
          <div className="dashboard__posts">
            <PageSubTitle>Listado de posts</PageSubTitle>

            <div className="dashboard__posts__post-container">
              {posts.map((post) => (
                <div key={post.title}>
                  <Post updateDataAfterChange={getPost} post={post} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}

        {loading ? (
          <LoaderGroup>
            <Loader width={100} />
            <Loader width={75} />
            <Loader width={80} />
            <Loader width={100} />
            <Loader width={90} />
          </LoaderGroup>
        ) : (
          ''
        )}
      </div>
    </PageComponent>
  );
};

export default Dashboard;
