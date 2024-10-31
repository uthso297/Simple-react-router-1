import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Postdetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    console.log(postId);
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Id: {id}</h2>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <button onClick={handleClick}>Go Back</button>
        </div>
    );
};

export default Postdetails;