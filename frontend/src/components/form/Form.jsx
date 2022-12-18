import './Form.scss';

const Form = (props) => {
  const { loading, error } = props;

  return (
    <form
      style={{
        opacity: loading ? '0.5' : 1,
        pointerEvents: loading ? 'none' : 'auto',
      }}
      onSubmit={props.onSubmit}
      className="form"
    >
      <div className="form__container">
        {error && <div className="form__errors">{error}</div>}
        {props.children}
      </div>
    </form>
  );
};

export default Form;
