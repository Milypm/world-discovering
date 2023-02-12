import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PostDetails = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const fetched = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { mode: 'cors' });
      const data = await fetched.json();
      setPost(data);
    }
    getPost();
  }, [id])
  return (
    <div>
      {
        post !== null
        ? (
          <div>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
          )
        : <p>Loading...</p>
      }
    </div>
  )
}
export default PostDetails;