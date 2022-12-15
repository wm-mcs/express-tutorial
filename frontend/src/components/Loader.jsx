import './Loader.scss';

const Loader = (props) => {
  return (
    <span className={`loader`} style={{ width: `${props.width}%` }}></span>
  );
};

export default Loader;
