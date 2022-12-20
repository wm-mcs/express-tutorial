import { useState } from 'react';
import './Post.scss';

import Form from './form/Form';
import Button from './Button';
import { useFetch } from '../composables/use-fetch';

const PostCreate = (props) => {
  const { afterCreat } = props;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
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

    await doFetch(`/api/posts`, 'POST', data, () => {
      afterCreat();
    });
  };

  return (
    <div className="">
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
          Crear post
        </Button>
      </Form>
    </div>
  );
};

export default PostCreate;
