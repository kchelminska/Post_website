import { Link } from "react-router-dom";
import { PostType } from "../../App";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type PostsListProps = {
  list: PostType[];
};

export const PostsList = ({ list }: PostsListProps) => {
  return (
    <>
      <h1>Posts List Page</h1>
      {list.map(({ id, title, body, userId, tags, reactions }) => (
        <Card sx={{ maxWidth: 500, mx: "auto", mt: 10 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <h2>{title}</h2>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>{body}</span>
              <h3>{userId}</h3>
              <span>{tags}</span>
              <p>{reactions}</p>
              <Link to={`/posts/${id}`}>Check</Link>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
