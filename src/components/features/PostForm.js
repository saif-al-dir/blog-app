// /components/features/PostForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control value={author} onChange={e => setAuthor(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Published Date</Form.Label>
                <Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Short Description</Form.Label>
                <Form.Control value={shortDescription} onChange={e => setShortDescription(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={5} value={content} onChange={e => setContent(e.target.value)} required />
            </Form.Group>
            <Button type="submit">{actionText}</Button>
        </Form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string,
};

export default PostForm;
