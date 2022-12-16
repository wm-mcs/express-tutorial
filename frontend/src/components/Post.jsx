import './Post.scss';

const Post = (props) => {
  const { title, description } = props.post;

  return (
    <article className="post">
      <h3 className="post__title">{title}</h3>
      <h4 className="post__description">{description}</h4>
    </article>
  );
};

export default Post;
