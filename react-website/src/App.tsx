import { useEffect, useState } from "react";
import './App.css';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { PostsList } from './components/PostsList';
import { Post } from './components/Post';
import { Register } from './components/Registration';
import { Login } from './components/Login';
import { PostForm } from './components/PostForm';
import { Navigation } from "./components/Navigation";

export type PostType = {
  id?: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions?: number;
};


function App() {
  const app = initializeApp(firebaseConfig);


  const [posts, setPosts] = useState<PostType[]>([])

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/posts`);
      const { posts } = await response.json();
      if (!response.ok) throw Error("Something wrong with response!");
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/posts" element={ <PostsList list={posts}/> } />
        <Route path="/posts/:id" element={<Post/>}/>
        <Route path="/posts/new" element={<PostForm />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}
export default App;
