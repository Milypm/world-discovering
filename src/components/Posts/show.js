import { Link } from 'react-router-dom';

const ShowPost = (props) => {
  const { title, body, id } = props;
  return (
    <Link className="post-detail-frame" to={{ pathname: `/posts/${id}`, state: {id: id}, }}>
      <p>{title}</p>
      <p>{body}</p>
    </Link>
  )
}
export default ShowPost;