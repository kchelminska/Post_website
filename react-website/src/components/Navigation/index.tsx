import { Link } from "react-router-dom";
import "./Navigation.scss"

export const Navigation = () => {
    return(
        <>
            <nav className="nav">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/posts">Posts</Link>
                </div>
                <div>
                    <Link to="/posts/:id">Single post</Link>
                </div>
                <div>
                    <Link to="/posts/new">Create post</Link>
                </div>
                <div>
                    <Link to="/register">Register</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </>
    )
}
