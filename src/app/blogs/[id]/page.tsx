const viewDetailBlog = ({ params }: { params: { id: string } }) => {
    console.log('check props: ', params.id);
    return <div>View Detail = {params.id}</div>;
};
export default viewDetailBlog;
