import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: description,
    userId: 100,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => json);
    event.preventDefault();
    alert('Your post was created succesfully!')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>New Post</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
        <input type="submit" placeholder='Save' />
    </form>
  )
}

export default NewPost;