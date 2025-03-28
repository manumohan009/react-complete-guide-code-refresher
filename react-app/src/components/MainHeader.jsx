import { Link } from "react-router-dom";

import classes from './MainHeader.module.css';
import { MdMessage, MdPostAdd } from "react-icons/md";

function MainHeader(){
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                <Link to="/create-post" className={classes.button}>
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    )
}

export default MainHeader;