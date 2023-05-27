import { Link } from "react-router-dom";
import { PostType} from "../../App";

type PostsListProps = {
    list: PostType[];
  };

export const PostsList = ({list}:PostsListProps) => {
    return(
        <>
            <h1>Posts List Page</h1>
            {list.map(({ id, title, body, userId, tags, reactions }) => (
                <div>
                    <h2>{title}</h2>
                    <span>{body}</span>
                    <h3>{userId}</h3>
                    <span>{tags}</span>
                    <p>{reactions}</p>
                    <Link to={`/posts/${id}`}>Check</Link>
                </div>
            ))}
        </>
    );
}