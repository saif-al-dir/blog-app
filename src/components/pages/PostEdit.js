import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, editPost } from "../../redux/postsRedux";
import PostForm from "../features/PostForm";

const PostEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postData = useSelector(state => getPostById(state, id));

    if (!postData) {
        navigate('/');
        return null;
    }

    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/');
    };

    return (
        <PostForm
            action={handleSubmit}
            actionText="Edit post"
            title={postData.title}
            author={postData.author}
            publishedDate={postData.publishedDate}
            shortDescription={postData.shortDescription}
            content={postData.content}
        />
    );
};

export default PostEdit;