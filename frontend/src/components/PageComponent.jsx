import { usePage } from '../composables/use-page';

import './PageComponent.scss';

const { setPageData } = usePage();

const PageComponent = (props) => {
  const { title, description } = props;

  setPageData({ title, description });

  return <>{props.children}</>;
};

export default PageComponent;
