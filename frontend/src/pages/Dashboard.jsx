import './Dashboard.scss';

import PageComponent from '../components/PageComponent';

const Dashboard = () => {
  return (
    <PageComponent
      title="Dashboard"
      description="La descripción de la página del dashboard"
    >
      <div className="Dashboard">Esto es el dashboard</div>
    </PageComponent>
  );
};

export default Dashboard;
