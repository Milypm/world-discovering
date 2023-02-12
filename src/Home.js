import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BasicExample from './components/Navbar';
import PostsIndex from './components/Posts/index';
import indexPosts from './API/posts';

const Home = () => {
  const [posts, setPosts] = useState([]);
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
  console.log('Home renders', posts);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <BasicExample />
      {
        posts.length !== 0
        ? <PostsIndex posts={posts} />
        : <p>posts is empty</p>
      }
    </div>
  );
}

export default Home;
