import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../redux/postsRedux";
import shortid from 'shortid';
import { Button } from "react-bootstrap";


const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [published, setPublished] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(addPost({
            id: shortid(),
            title,
            author,
            published,
            content,
        }));

        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Post</h2>
            <div>
                <label>Title</label><br />
                <input value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Author</label><br />
                <input value={author} onChange={e => setAuthor(e.target.value)} required />
            </div>
            <div>
                <label>Published</label><br />
                <input value={published} onChange={e => setPublished(e.target.value)} required />
            </div>
            <div>
                <label>Content</label><br />
                <textarea value={content} onChange={e => setContent(e.target.value)} required />
            </div>
            <Button type="submit">Add Post</Button>
        </form>
    );
};

export default AddPostForm;