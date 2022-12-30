import { usePage } from '../../../composables/use-page';

import './PageComponent.scss';

const { setPageData } = usePage();

const PageComponent = (props) => {
  const { title, description } = props;

  setPageData({ title, description });

  return (
    <div className="page-component">
      {props.breadCrumbsSection && (
        <div className="page-component__bread-crumbs-section">
          {props.breadCrumbsSection}
        </div>
      )}

      {props.titleSection && (
        <div className="page-component__title-section">
          {props.titleSection}
        </div>
      )}

      <main className="page-component__main-section">{props.children}</main>
    </div>
  );
};

export default PageComponent;
