import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, removePost } from "../../redux/postsRedux";
import { Modal, Button } from "react-bootstrap";

const SinglePost = () => {
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        dispatch(removePost(id));
        setShowModal(false);
    };

    if (!post) return <Navigate to="/" />;

    return (
        <div>
            <h2>
                {post.title}
                <Link to={`/post/edit/${id}`}>
                    <button>Edit</button>
                </Link>
                <button onClick={() => setShowModal(true)}>Delete</button>
            </h2>
            <p>{post.content}</p>
            <div />

            {/* Modal for delete confirmation */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This post will be deleted permanently.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SinglePost;