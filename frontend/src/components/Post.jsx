import { useState } from 'react';
import './Post.scss';
import Modal from './Modal';
import Form from './form/Form';
import Button from './Button';
import { useFetch } from '../composables/use-fetch';
import { FaTrash } from 'react-icons/fa';
const Post = (props) => {
  const { title, description, _id } = props.post;
  const { updateDataAfterChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: title,
    description: description,
  });

  const { loading, error, doFetch } = useFetch();

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = formData;

    await doFetch(`/api/posts/${_id}`, 'PUT', data, () => {
      setIsOpen(false);
      updateDataAfterChange();
    });
  };

  const onDelete = async (e) => {
    e.preventDefault();

    let validation = confirm('Are you shure?');

    if (!validation) return;

    const data = formData;

    await doFetch(`/api/posts/${_id}`, 'DELETE', data, () => {
      updateDataAfterChange();
    });
  };

  return (
    <article
      style={{
        opacity: loading ? '0.5' : 1,
        pointerEvents: loading ? 'none' : 'auto',
      }}
      className="post"
    >
      <h3
        onClick={() => {
          setIsOpen(true);
        }}
        className="post__title"
      >
        {title}
      </h3>
      <h4 className="post__description">{description}</h4>

      <div className="post__buttons">
        <button className="post__buttons__button" onClick={onDelete}>
          <FaTrash />
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={`EDITAR: ${formData.title}`}
      >
        <div>
          <Form loading={loading} onSubmit={onSubmit} error={error}>
            <fieldset>
              <legend>Título</legend>
              <input
                onChange={onChange}
                name="title"
                type="text"
                value={formData.title}
              />
            </fieldset>
            <fieldset>
              <legend>Descripción</legend>
              <textarea
                onChange={onChange}
                name="description"
                type="text"
                value={formData.description}
              ></textarea>
            </fieldset>
            <Button type="submit" size="">
              Editar
            </Button>
          </Form>
        </div>
      </Modal>
    </article>
  );
};

export default Post;
