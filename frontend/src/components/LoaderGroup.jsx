import './LoaderGroup.scss';

const LoaderGroup = (props) => {
  return <div className={`loader-group`}>{props.children}</div>;
};

export default LoaderGroup;
