import React, { useState, useEffect } from 'react';
import indexPosts from '../../API/posts';

const PostsIndex = (props) => {
  const { posts } = props;
  const post = (title, body) => {
    return (
          <div>
            <p>{title}</p>
            <p>{body}</p>
          </div>
    )
  }
  return (
    <div className='index-posts'>
      {
        posts.map((obj) => (
          post(obj.title, obj.body)
        ))
      }
    </div>
  )
}
export default PostsIndex;