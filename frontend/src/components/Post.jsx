import { useState } from 'react';
import './Post.scss';
import Modal from './Modal';
import Form from './form/Form';
import Button from './Button';

const Post = (props) => {
  const { title, description } = props.post;

  const [isOpen, setIsOpen] = useState(false);

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [formData, setFormData] = useState({
    title: title,
    description: description,
  });

  return (
    <article className="post">
      <h3
        onClick={() => {
          setIsOpen(true);
        }}
        className="post__title"
      >
        {title}
      </h3>
      <h4 className="post__description">{description}</h4>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <div>
            <Form>
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
      )}
    </article>
  );
};

export default Post;
