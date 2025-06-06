import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";


const Home = () => {
    const posts = useSelector(getAllPosts);
    return (
        <div>
            <h1>Blog Posts</h1>
            <Row xs={1} md={2} className="g-4">
                {posts.map(post => (
                    <Col >
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
                    </Col>
                ))}
            </Row>

            <Link to="/post/add">
                <button>Add Post</button>
            </Link>
        </div>
    );
};

export default Home;