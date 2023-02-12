import ShowPost from './show';

const PostsIndex = (props) => {
  const { posts } = props;

  const onClickHandler = (id) => {
    const indexPosts = async () => {
      const fetched = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { mode: 'cors' });
      const data = await fetched.json();
      return data;
    }
    return indexPosts;
  }

  return (
    <div className='index-posts'>
      {
        posts.map((obj) => (
          <ShowPost
            key={obj.id}
            title={obj.title}
            body={obj.body}
            id={obj.id}
            onClickHandler={onClickHandler}
          />
        ))
      }
    </div>
  )
}
export default PostsIndex;