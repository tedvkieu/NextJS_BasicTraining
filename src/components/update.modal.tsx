'use client';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
    showModalUpdate: boolean;
    setShowModalUpdate: (value: boolean) => void;
    data: IBlog | null;
    setData: (value: IBlog | null) => void;
}

function UpdateModal(props: IProps) {
    const { showModalUpdate, setShowModalUpdate, data, setData } = props;

    const [id, setID] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = () => {
        if (!title) {
            toast.error('not empty title');
            return;
        }
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author, content }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res) {
                    toast.success('Update Blog Succeed.....!');
                    handleCloseModal();
                    mutate('http://localhost:8000/blogs');
                }
            });
    };

    useEffect(() => {
        if (data && data.id) {
            setID(data.id);
            setTitle(data.title);
            setAuthor(data.author);
            setContent(data.content);
        }
    }, [data]);

    const handleCloseModal = () => {
        setTitle('');
        setAuthor('');
        setContent('');
        setData(null);
        setShowModalUpdate(false);
    };
    return (
        <>
            <Modal
                show={showModalUpdate}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Update A Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="..."
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                type="email"
                                placeholder="..."
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                as="textarea"
                                rows={3}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => handleCloseModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateModal;
