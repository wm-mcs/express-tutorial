import PageComponent from '../components/layout/pages/PageComponent';
import PageTitle from '../components/layout/pages/PageTitle';

import './Home.scss';

const Home = () => {
  return (
    <PageComponent
      title="Home"
      description="La descripción de la página home"
      titleSection={<PageTitle>Home</PageTitle>}
    >
      <section className="home">Home</section>
    </PageComponent>
  );
};

export default Home;
