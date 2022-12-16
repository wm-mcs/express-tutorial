import { usePage } from '../../../composables/use-page';

import './PageComponent.scss';

const { setPageData } = usePage();

const PageComponent = (props) => {
  const { title, description } = props;

  setPageData({ title, description });

  return <div className="page-component">{props.children}</div>;
};

export default PageComponent;
