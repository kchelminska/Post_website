import { Link, useParams } from 'react-router-dom';
import './Post.scss';
import { useEffect, useState } from 'react';
import { PostType } from '../../App';


export const Post = () => {
    const [post, setPost] = useState<PostType>({
        id: 0,
        title: "",
        body: "",
        userId: 0,
        tags: [],
        reactions: 0
    });


    const { id } = useParams()

    const fetchPosts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/posts/${id}`);
            const data = await response.json();
            if (!response.ok) throw Error("Something wrong with response!");
            console.log(data.title)
            console.log(data)
            setPost(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [id]);

    return (
        <>
            <h1>{post.title}</h1>
            <h3>{id}</h3>
            <p>{post.body}</p>
            <h3>{post.userId}</h3>
            <p>{post.tags}</p>
            {post.tags.map}
            <h4>{post.reactions}</h4>
            <Link to={'/posts/4'}>Tutaj</Link>
        </>
    )
}