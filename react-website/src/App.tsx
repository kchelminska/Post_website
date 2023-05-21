import React from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { PostsList } from './components/PostsList';
import { Post } from './components/Post';
import { Registration } from './components/Registration';
import { Login } from './components/Login';
import { PostForm } from './components/PostForm';

function App() {
  const app = initializeApp(firebaseConfig);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/posts" element={ <PostsList/> } />
        <Route path="/:id" element={<Post/>}/>
        <Route path="/posts/new" element={<PostForm />}/>
        <Route path="/register" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}
export default App;

