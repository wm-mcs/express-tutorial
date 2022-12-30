import { useState, useEffect } from 'react';
import './Dashboard.scss';
import PageComponent from '../components/layout/pages/PageComponent';
import PageTitle from '../components/layout/pages/PageTitle';
import PageSubTitle from '../components/layout/pages/PageSubTitle';
import Loader from '../components/Loader';
import LoaderGroup from '../components/LoaderGroup';
import Post from '../components/Post';
import PostCreate from '../components/PostCreate';
import Modal from '../components/Modal';
import { useFetch } from '../composables/use-fetch';
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
  const { doFetch, loading } = useFetch();
  const [posts, setPosts] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
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

  const afterCreat = () => {
    setShowCreate(false);
    getPost();
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Modal isOpen={showCreate} setIsOpen={setShowCreate} title={'Crear post'}>
        <PostCreate afterCreat={afterCreat} />
      </Modal>

      <PageComponent
        title="Dashboard"
        description="La descripción de la página del dashboard"
        titleSection={<PageTitle>Posts</PageTitle>}
      >
        <div className="dashboard">
          <span
            onClick={() => {
              setShowCreate(true);
            }}
            className="dashboard__posts__add-text"
          >
            Crear nuevo post <FaPlus />
          </span>

          {posts.length > 0 ? (
            <div className="dashboard__posts">
              <PageSubTitle>Listado de posts </PageSubTitle>

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
    </>
  );
};

export default Dashboard;
