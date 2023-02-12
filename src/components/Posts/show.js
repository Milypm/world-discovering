import { Link } from 'react-router-dom';

const ShowPost = (props) => {
  const { title, body, id } = props;
  return (
    <Link to={{ pathname: `/posts/${id}`, state: {id: id}, }}>
      <p>{title}</p>
      <p>{body}</p>
    </Link>
  )
}
export default ShowPost;