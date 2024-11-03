'use client';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
interface IProps {
    blogs: IBlog[];
}

function AppTable(props: IProps) {
    const { blogs } = props;
    console.log('check props: ', blogs);
    return (
        <Table striped bordered hover size="lg">
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
                                <Button variant="primary">View</Button>
                                <Button className="mx-3" variant="warning">
                                    Edit
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default AppTable;
