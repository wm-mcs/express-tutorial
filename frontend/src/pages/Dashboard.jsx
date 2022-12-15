import { useState, useEffect } from 'react';
import './Dashboard.scss';
import PageComponent from '../components/PageComponent';
import Loader from '../components/Loader';
import LoaderGroup from '../components/LoaderGroup';
import { useFetch } from '../composables/use-fetch';
import { useEnv } from './../composables/use-env';
import { useAuth } from '../composables/use-auth';
const { apiUrlPath } = useEnv();

const Dashboard = () => {
  const { doFetch, loading } = useFetch();
  const [, setPosts] = useState();
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
        <div className="dashboard__title">Posts</div>

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
