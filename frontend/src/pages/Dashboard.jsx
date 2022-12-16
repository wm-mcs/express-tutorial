import { useState, useEffect } from 'react';
import './Dashboard.scss';
import PageComponent from '../components/layout/pages/PageComponent';
import PageTitle from '../components/layout/pages/PageTitle';
import PageSubTitle from '../components/layout/pages/PageSubTitle';
import Loader from '../components/Loader';
import LoaderGroup from '../components/LoaderGroup';
import Post from '../components/Post';

import { useFetch } from '../composables/use-fetch';
import { useEnv } from './../composables/use-env';
import { useAuth } from '../composables/use-auth';
const { apiUrlPath } = useEnv();

const Dashboard = () => {
  const { doFetch, loading } = useFetch();
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getPost = async () => {
      let post = await doFetch(
        `${apiUrlPath}/api/posts`,
        'GET',
        null,
        () => {
          setPosts(post);
        },
        null,
        user.token
      );
    };

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
                  <Post post={post} />
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
