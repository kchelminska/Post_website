import { Link } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <Link className="nav-link logo" to="/">
            Post Website
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </div>
        {/* <div>
                    <Link className="nav-link" to="/posts/:id">Single post</Link>
                </div> */}
        <div>
          <Link className="nav-link" to="/posts/new">
            Create post
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};
