import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Home = () => {
    const posts = useSelector(getAllPosts);
    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map(post => (
                <Card style={{ width: '18rem' }} key={post.id}>
                    <Card.Body>
                        <h2>{post.title}</h2>
                        <h3>{post.shortDescription}</h3>
                        <h4>{post.content}</h4>
                        <p>Published: {post.publishedDate}</p>
                        <p>Author: {post.author}</p>
                        <Link to={`/post/${post.id}`}>Read more</Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Home;