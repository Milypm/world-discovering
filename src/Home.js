import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navbar';
import PostsIndex from './components/Posts/index';

const Home = () => {
  console.log(process.env.REACT_APP_GOOGLE_API_KEY)
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    const indexPosts = async () => {
      const fetched = await fetch('https://jsonplaceholder.typicode.com/posts', { mode: 'cors' });
      const data = await fetched.json();
      setPosts(data);
    }
    indexPosts();
  }, []);
  useEffect(() => {
    const indexImages = async () => {
      const fetched = await fetch('https://api.unsplash.com/photos/random', {
        // mode: 'cors',
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          // 'Access-Control-Allow-Methods': '*',
          'Authorization': 'Client-ID ELdX89sozAo65JmO-Mrp_A29Nk1rJy4rJ2m-6CQfMdw',
        }
      });
      const data = await fetched.json();
      console.log('images data', data)
      setImages(data);
    }
    indexImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Link to={{ pathname: `/posts/new`}}>
        Create new post
      </Link>
      <Navigation />
      {
        posts.length !== 0
        ? <PostsIndex posts={posts} images={images} />
        : <p>posts is empty</p>
      }
    </div>
  );
}

export default Home;
