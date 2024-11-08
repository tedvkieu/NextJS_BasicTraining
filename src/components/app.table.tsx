'use client';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
interface IProps {
    blogs: IBlog[];
}

function AppTable(props: IProps) {
    const { blogs } = props;
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [data, setData] = useState<IBlog | null>(null);

    const handleDeleteBlog = (id: number) => {
        if (confirm(`Do you want to delete this blog (id = ${id})`)) {
            fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res) {
                        toast.success('Delete Blog Succeed.....!');
                        mutate('http://localhost:8000/blogs');
                    }
                });
        }
    };
    return (
        <>
            <div
                className="mb-3"
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Table Blogs</h3>
                <Button
                    variant="secondary"
                    onClick={() => setShowModalCreate(true)}>
                    Add New
                </Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        href={`/blogs/${blog.id}`}>
                                        View
                                    </Button>
                                    <Button
                                        className="mx-3"
                                        variant="warning"
                                        onClick={() => {
                                            setData(blog);
                                            setShowModalUpdate(true);
                                        }}>
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() =>
                                            handleDeleteBlog(blog.id)
                                        }>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
            <UpdateModal
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                data={data}
                setData={setData}
            />
        </>
    );
}

export default AppTable;
