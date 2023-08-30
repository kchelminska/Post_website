import "./PostForm.scss";
import Button from "@mui/material/Button";
// import "../../App.scss";
import { usePostForm } from "./hooks/usePostForm";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const PostForm = () => {
  const { post, handleChange, handleSave } = usePostForm();

  return (
    <div className="container-back">
      <div className="post">
        <h1>Create your new post:</h1>

        <Box onSubmit={handleSave} component="form" noValidate>
          <div className="new-input-area">
            <TextField
              sx={{ m: 2 }}
              required
              type="text"
              className="title"
              name="title"
              label="Title"
              value={post.title}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              sx={{ m: 2 }}
              required
              type="text"
              className="message"
              name="body"
              label="Message"
              multiline
              value={post.body}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              sx={{ m: 2 }}
              type="text"
              inputProps={{ maxLength: 10 }}
              className="tags"
              name="tags"
              label="Tag"
              onChange={handleChange}
              variant="outlined"
            />
            <Button className="save-btn" variant="contained" type="submit">
              Save
            </Button>
          </div>
        </Box>

        <div className="new-post-area">
          <h2>{post.title}</h2>
          <span>{post.body}</span>
          <div className="tag">{post.tags}</div>
        </div>
      </div>
    </div>
  );
};
