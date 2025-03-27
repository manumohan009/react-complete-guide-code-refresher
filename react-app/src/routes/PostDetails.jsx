import { Link, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";


import classes from './PostDetails.module.css'

function PostDetails() {
    const post = useLoaderData();
    // const post = {id: '123', author: 'Manu', body: 'React is awesome'}
    if(!post){
        return (
            <>
                <Modal>
                    <main className={classes.details}>
                        <h1>Could not find post</h1>
                        <p>Unfortunately, the request post could not be found</p>
                        <p>
                            <Link to=".." className={classes.btn}>Okay</Link>
                        </p>
                    </main>
                </Modal>
    
            </>
        )
    }
    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
            </main>
        </Modal>
    )

}

export default PostDetails;

export async function loader({params}){
    console.log(params, "params");
    const response = await fetch('http://localhost:8080/posts/' + params.postId);
    const resData = await response.json();
    return resData.post;
}