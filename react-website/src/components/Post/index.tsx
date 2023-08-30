import { Link, useParams } from "react-router-dom";
import "./Post.scss";
import { useEffect, useState } from "react";
import { PostType } from "../../App";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Post = () => {
  const [post, setPost] = useState<PostType>({
    id: 0,
    title: "",
    body: "",
    userId: 0,
    tags: [],
    reactions: 0,
  });

  const { id } = useParams();

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await response.json();
      if (!response.ok) throw Error("Something wrong with response!");
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  return (
    <Card sx={{ maxWidth: 500, mx: "auto", mt: 10 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <h1>{post.title}</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{post.body}</p>
          <h3>{post.userId}</h3>
          <div className="container-tags">
            {post.tags.map((tag, index) => (
              <div key={index}>
                <div className="tag">{tag}</div>
              </div>
            ))}
          </div>
          <p>Reactions: {post.reactions}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Edit</Button>
        <Button variant="contained" size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};
