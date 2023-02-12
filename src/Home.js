import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalTitle, ModalBody, Form, ModalFooter } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navbar';
import PostsIndex from './components/Posts/index';
import newPost from './components/Posts/NewPost';
import indexPosts from './API/posts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    // setPosts(getPosts());
    const indexPosts = async () => {
      const fetched = await fetch('https://jsonplaceholder.typicode.com/posts', { mode: 'cors' });
      const data = await fetched.json();
      // return data;
      setPosts(data);
    }
    indexPosts();
  }, []);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleChange = (e) => setName(e.target.value);
  const newPostModal = () => {
    console.log('newPostModal')
    return (
      <>
        <div
          className="modal fade d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
          >
        </div>
        <Modal className="modal-dialog" show={isOpen} onHide={closeModal}>
        <ModalHeader closeButton>
          <ModalTitle>Modal heading</ModalTitle>
        </ModalHeader>
        <ModalBody>
        <Form.Group >
            <Form.Label>New Post</Form.Label>
            <Form.Control type="text" onChange={handleChange} value={name} placeholder="name input"/>           
        </Form.Group>
        </ModalBody>
        <ModalFooter>
          {/* <Button variant="primary" onClick={handleSubmit}>
            Submit 
          </Button> */}
        </ModalFooter>
        </Modal>
      </>
    )
  }
  // console.log('Home renders', posts);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Link to={{ pathname: `/posts/new`}}>
        Create new post
      </Link>
      {/* <Button variant="primary" onClick={openModal}></Button> */}
      {/* {newPostModal()} */}
      {/* <Example
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
      /> */}
      <Navigation />
      
      {
        posts.length !== 0
        ? <PostsIndex posts={posts} />
        : <p>posts is empty</p>
      }
    </div>
  );
}

export default Home;
