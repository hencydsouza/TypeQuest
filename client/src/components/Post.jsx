/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
    return (
        <div>
            <hr color="#ddd" />
            <div className='post'>

                <div className='texts'>
                    <p className='category'>Startups</p>
                    <Link to={`/post/${_id}`}>
                        <h2>{title}</h2>
                    </Link>
                    <p className='info'>
                        <a className='author'>{author.username}</a>
                        <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
                    </p>
                </div>
                <p className='summary'>{summary}</p>
                <div className='image'>
                    <Link to={`/post/${_id}`}>
                        <img src={'https://typequest-server.onrender.com/' + cover} alt='' />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Post